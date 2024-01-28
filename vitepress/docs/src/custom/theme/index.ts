//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
    logo: {
        light: '/logo/arduino_logo.gif', dark: '/logo/arduino_logo.gif', alt: 'Arduino Logo'
    },
    siteTitle: 'Arduino Discord Wiki ',
    /* Note the footer will not show when sidebar is active */
    footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present Arduino Discord Community",
    },
    nav: [
        {
            text: 'About',
            items: [
                { text: 'About Us', link: '/about' },
                //{ text: 'Development Road Map', link: '/dev_roadmap' },
            ]
        },
        { text: "Contact", link: "/contact" },
    ],
    sidebar: [
        {
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/gettingStarted/basicsOfProgramming" },
                { text: "Buyers Guide", link: "/gettingStarted/arduinobuyersguide" },
            ],
        },
        {
            text: "Code Guides",
            collapsible: true,
            items: [
                { text: "Combining Sketches", link: "/codeGuides/combiningSketches" },
                { text: "Millis vs Delay", link: "/codeGuides/millisVsDelay" },
            ],
        },
        {
            text: "Hardware Guides",
            collapsible: true,
            items: [
                { text: "BreadBoards", link: "/hardwareGuides/breadBoard" },
                { text: "Buttons", link: "/hardwareGuides/buttons" },
                { text: "Resistors", link: "/hardwareGuides/ledResistors" },
                { text: "Nine Volts", link: "/hardwareGuides/nineVolts" },
                { text: "Maker Boards", link: "/hardwareGuides/makerboards" },
                { text: "Logic Level", link: "/hardwareGuides/logiclevel" },
            ],
        },
        {
            text: "Contributing",
            collapsible: false,
            items: [
                { text: "Contributing", link: "/contributing/dev_docs" },
                { text: "Pages", link: "/contributing/pages" },
            ],
        }
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/arduinodiscord/wiki' },
        { icon: 'discord', link: 'https://discord.gg/arduino' }
    ]
}

const ThemeSettings = {}

export { theme, ThemeSettings }
