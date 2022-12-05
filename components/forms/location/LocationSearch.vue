<template>
    <div class="relative" v-clickaway="hideList">
        <SearchInput :aria-expanded="isShowing" v-model="search" :usePencil="true" :placeholder="$t('SEARCH_COUNTRY')"
            @keydown.down="event => $refs['listPicker'].incrementFocus(event)"
            @keydown.up="event => $refs['listPicker'].decrementFocus(event)"
            @keydown.enter="event => $refs['listPicker'].selectCurrentItem()" @onFocus="showList" @onClick="showList"
            @onCloseClick="onCloseClick">
            <template v-slot:icon>
                <PinIcon class="h-6 w-6 absolute inset-0 m-4" />
            </template>
        </SearchInput>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="isShowing" class="absolute z-10 mt-1 w-full rounded-md shadow-lg" :class="{
                'bg-white': filteredCountries.length > 0,
                'bg-gray-100': !filteredCountries.length,
            }">
                <div v-if="filteredCountries.length === 0" class="text-gray-500 text-center p-4 shadow-lg">
                    {{ $t('NO_COUNTRIES_FOUND') }}
                </div>
                <ListPicker ref="listPicker" v-else :items="filteredCountries" v-slot="{ item }"
                    @selectItem="onSelectCountry">
                    <LocationSearchItem :id="item" :title="$t(`COUNTRY_${item}`)" :isSelected="item === modelValue" />
                </ListPicker>
            </div>
        </transition>
    </div>
</template>

<script>
import LocationSearchItem from './LocationSearchItem.vue'
import PinIcon from './PinIcon.vue'
import { findCountries } from './countries'
import SearchInput from '@/components/forms/input/SearchInput'
import ListPicker from '@/components/forms/ListPicker'

export default {
    props: {
        modelValue: String,
    },
    components: {
        PinIcon,
        LocationSearchItem,
        SearchInput,
        ListPicker,
    },
    data() {
        let search = ''
        if (this.modelValue && this.$te(`COUNTRY_${this.modelValue}`)) {
            search = this.$t(`COUNTRY_${this.modelValue}`)
        }
        return {
            search,
            isShowing: false,
        }
    },
    computed: {
        filteredCountries() {
            return findCountries(this.search)
        },
    },

    watch: {
        search() {
            if (this.modelValue) {
                this.$emit('update:modelValue', '')
            }
        },
    },
    methods: {
        showList() {
            this.isShowing = true
        },
        hideList() {
            this.isShowing = false
        },
        async onSelectCountry(code) {
            this.$emit('update:modelValue', '')
            await this.$nextTick()
            this.search = this.$t(`COUNTRY_${code}`)
            this.$emit('update:modelValue', code)
            this.isShowing = false
        },
        onCloseClick() {
            this.search = ''
            this.$emit('update:modelValue', '')
        },
    },
}
</script>
