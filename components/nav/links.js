import locales from '~~/lang/en.json' assert {type: 'json'};

const get = k => locales[k]


export default function getLinks({ isHeader = false }) {
    const links = [
        {
            href: '/pledge',
            title: get('PLEDGE'),
        },
        {
            href: '/sustainable-eco-banks',
            title: get('SUSTAINABLE_BANKS'),
        },
        { href: '/blog', title: get('BLOG') },
        {
            href: '/faq',
            title: get('FAQ'),
            short_title: get('FAQ_SHORT'),
        },
        { href: '/contact', title: get('CONTACT') },
    ]

    if (!isHeader) {
        links.push({
            href: '/certification',
            title: get('CERTIFICATION'),
        })
        links.push({
            href: '/press',
            title: get('PRESS'),
        })

        links.push({
            href: '/partners',
            title: get('OUR PARTNERS'),
            short_title: get('PARTNERS'),
        })

        links.push({
            href: '/team',
            title: get('WHO_WE_ARE'),
            short_title: get('TEAM'),
        })
        return [
            {
                href: '/take-action',
                title: get('TAKE_ACTION'),
                short_title: get('ACT'),
            },
            ...links,
        ]
    }

    return links
}
