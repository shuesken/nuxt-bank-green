<template>
    <div class="page">
        <div class="bg-sushi-50">
            <div class="page-fade-in contain pt-28 pb-16">
                <h1 class="text-2xl font-semibold whitespace-pre-line mb-4" v-t="'PRESS'" />
                <p class="text-gray-600 mb-12">
                    For press or media enquiries, please write to
                    <a href="mailto:media@bank.green">media@bank.green</a>
                </p>

                <div class="-mx-4 mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    <BlogCard title="Bank.Green announces the Fossil Free Banking Alliance"
                        description="Today, sustainable banking campaign group Bank.Green is announcing its latest initiative, the Fossil Free Banking Alliance. The alliance will help climate-conscious individuals to more easily move their money away from banks that finance the fossil fuels industry: any retail bank that is a member of this growing group has been Fossil Free Certified by Bank.Green."
                        date="Feb 9, 2022" link="/press/alliance" />
                    <BlogCard
                        title="Bank.Green launches COP26 campaign empowering consumers to switch from banks financing foissil fuels"
                        description="As the world looks to Glasgow and COP26, new campaign group Bank.Green is seizing the moment with its “Swap for COP” campaign, encouraging bank customers to move their money away from banks that continue to finance fossil fuels on Nov 15."
                        date="October 29, 2021" link="/press/cop26-campaign" />
                    <BlogCard title="Bank.Green launches website, campaign sounding alarm on banks funding fossil fuels"
                        description="Launched today, campaign group Bank.Green’s inaugural Money Movement campaign sounds the alarm on the banking industry’s climate-destroying activities while offering ordinary people a way to investigate their banks."
                        date="April 5, 2021" link="/press/launch" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '@/components/blog/BlogCard.vue'

export default {
    components: { BlogCard },

    setup() {
        useHead({ title: 'Press' })
    },
}
</script>
