<template>
    <div class="relative" v-clickaway="hideList">
        <SearchInput :aria-expanded="isShowing" v-model="search" placeholder="Search region/state"
            @keydown.down="onKeyDown" @keydown.up="onKeyUp" @keydown.enter="onKeyEnter" @onFocus="showList"
            @onClick="showList" @onCloseClick="onCloseClick">
            <template v-slot:icon>
                <PinIcon class="h-6 w-6 absolute inset-0 m-4" />
            </template>
        </SearchInput>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="isShowing" class="absolute z-10 mt-1 w-full rounded-md shadow-lg" :class="{
                'bg-white': filteredOptions.length > 0,
                'bg-gray-100': !filteredOptions.length,
            }">
                <div v-if="isLoading" class="text-gray-500 text-center p-4 shadow-lg">
                    Loading
                </div>
                <div v-else-if="filteredOptions.length === 0" class="text-gray-500 text-center p-4 shadow-lg">
                    No region/state found
                </div>
                <ListPicker ref="listPicker" v-else :items="filteredOptions" v-slot="{ item }"
                    @selectItem="onSelectLocation">
                    <div>
                        {{ item.toponymName
                        }}{{
        item.fcode === 'ADM2' ? `, ${item.adminName1}` : ''
}}
                    </div>
                </ListPicker>
            </div>
        </transition>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import SearchInput from '@/components/forms/input/SearchInput'
import PinIcon from './location/PinIcon.vue'
import ListPicker from '@/components/forms/ListPicker'
import Geonames from 'geonames.js'
import Fuse from 'fuse.js'

export default {
    props: {
        modelValue: String,
    },
    components: {
        PinIcon,
        SearchInput,
        ListPicker,
    },
    setup() {
        const listPicker = ref()
        const onKeyDown = (event) => {
            listPicker.value.incrementFocus(event)
        }
        const onKeyUp = (event) => {
            listPicker.value.decrementFocus(event)
        }
        const onKeyEnter = () => listPicker.value.selectCurrentItem()

        const search = ref('')
        const isShowing = ref(false)
        const isLoading = ref(false)

        const { location } = useCountryLocation()

        const options = ref([])
        const geonames = Geonames({
            username: 'myusername',
            encoding: 'JSON',
        })

        const searchRegion = async () => {
            isLoading.value = true
            const data = await geonames.search({
                country: location.value,
                featureClass: 'A',
                featureCode: ['ADM1', 'ADM2'],
                maxRows: 1000,
            })
            options.value = data.geonames.sort((a, b) =>
                a.toponymName.localeCompare(b.toponymName)
            )
            isLoading.value = false
        }

        const filteredOptions = computed(() => {
            const fuse = new Fuse(options.value, {
                includeScore: true,
                keys: ['toponymName'],
            })

            if (!search.value.trim()) {
                return options.value
            }
            const result = fuse.search(search.value)
            return result.filter((x) => x.score < 0.3).map((x) => x.item)
        })

        watch(
            location,
            () => {
                searchRegion()
            },
            { immediate: true }
        )

        return {
            listPicker,
            onKeyDown,
            onKeyUp,
            onKeyEnter,

            search,
            isShowing,
            isLoading,

            options,
            filteredOptions,
        }
    },

    methods: {
        showList() {
            this.isShowing = true
        },
        hideList() {
            this.isShowing = false
        },
        async onSelectLocation(item) {
            this.$emit('update:modelValue', '')
            await this.$nextTick()
            this.search = item.toponymName
            this.$emit('update:modelValue', item.toponymName)
            this.$emit('select', {
                type: item.fcode === 'ADM2' ? 'subregion' : 'region',
                value: item.toponymName,
            })

            this.isShowing = false
        },
        onCloseClick() {
            this.search = ''
            this.$emit('update:modelValue', '')
            this.$emit('select', null)
        },
    },
}
</script>
