// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HRZN Hosting Knowledgebase',
    tagline: 'High performance. Low prices. No compromises.',
    url: 'https://docs.horizonnetworks.uk',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://archive.horizonnetworks.uk/Branding/Logo/Coloured_Icon.png',
    staticDirectories: ['static'],

    organizationName: 'Horizon-Hosting',
    projectName: 'Documentation',

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr', 'de', 'nl', 'sv', 'it', 'es', 'pl'],
    },

    scripts: [
        {
        src: 'https://analytics.horizonnetworks.uk/js/plausible.js',
        defer: true,
        'data-domain': 'docs.horizonnetworks.uk'
        },
        {
            src: 'https://horizonnetworks.instatus.com/widget/script.js'
        }
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                blog: {
                    showReadingTime: true,

                    editUrl: 'https://github.com/Horizon-Hosting/Documentation/edit/pre-release',
                },
                theme: {
                    customCss: require.resolve('./src/css/colours.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'knowledgebase',
                path: 'knowledgebase',
                routeBasePath: 'knowledgebase',
                sidebarPath: require.resolve('./sidebars_knowledgebase.js'),
                editUrl: 'https://github.com/Horizon-Hosting/Documentation/edit/pre-release',
            },
        ],
    ],

    themeConfig: ({
        navbar: {
            title: 'HRZN Hosting Docs',
            logo: {
                alt: 'HRZN Logo',
                src: 'https://archive.horizonnetworks.uk/Branding/Logo/Coloured_Icon.svg',
            },
            items: [
                {
                    type: 'localeDropdown',
                    position: 'left',
                },
                {
                    type: 'doc',
                    docsPluginId: 'knowledgebase',
                    docId: 'getting_support',
                    position: 'left',
                    label: 'Knowledgebase',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    type: 'dropdown',
                    label: 'Legal',
                    position: 'left',
                    items: [{
                            label: 'Terms and conditions',
                            to: 'legal/terms-and-conditions',
                        },
                        {
                            label: 'Privacy Policy',
                            to: 'legal/privacy-policy',
                        },
                        {
                            label: 'Acceptable Use Policy',
                            to: 'legal/acceptable-use-policy',
                        },
                        {
                            label: 'Refund Policy',
                            to: 'legal/refund-policy',
                        },
                        {
                            label: 'Copyright Policy',
                            to: 'legal/copyright-policy',
                        },
                    ],

                },
                {
                    href: 'https://hrzn.link/billing',
                    label: 'Billing Panel',
                    position: 'left',
                },
                {
                    href: 'https://github.com/Horizon-Hosting',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            links: [{
                    title: 'Quick Links',
                    items: [{
                            label: 'Billing Panel',
                            href: 'https://hrzn.link/billing',
                        },
                        {
                            label: 'Game Panel',
                            href: 'https://hrzn.link/panel',
                        },
                        {
                            label: 'cPanel',
                            href: 'https://hrzn.link/cpanel',
                        },
                    ],
                },
                {
                    title: 'Socials',
                    items: [{
                            label: 'Discord',
                            href: 'https://hrzn.link/discord'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Horizon-Hosting'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/HRZNHosting'
                        },
                        {
                            label: 'Instagram',
                            href: 'https://www.instagram.com/hrznhosting'
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/HRZNHosting/'
                        }
                    ],
                },
                {
                    title: 'Legal',
                    items: [{
                            label: 'Terms and conditions',
                            to: 'legal/terms-and-conditions',
                        },
                        {
                            label: 'Privacy Policy',
                            to: 'legal/privacy-policy',
                        },
                        {
                            label: 'Acceptable Use Policy',
                            to: 'legal/acceptable-use-policy',
                        },
                        {
                            label: 'Refund Policy',
                            to: 'legal/refund-policy',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Horizon Hosting.`,
        },
        metadata: [{
            name: 'og:title',
            content: 'HRZN Hosting Knowledgebase',
        },
        {
            name: 'og-site_name',
            content: 'HRZN Hosting Knowledgebase',
        },
        {
            name: 'og:description',
            content: 'High performance. Low prices. No compromises.',
        }, {
            name: 'theme-color',
            content: '#ff4f5e',
        },
    ],
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
