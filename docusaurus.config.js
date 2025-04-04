// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


import sidebars from './sidebars';
// Quick fix
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Obsidian Essentials',
  tagline: 'Made By IDKDead',
  favicon: 'https://i.imgur.com/9qmrYKK.jpg',

  // Set the production url of your site here
  url: 'https://obsidian-essentials.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'idkdeadxd.github.io', // Usually your GitHub org/user name.
  projectName: 'obsidian-essentials-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */

      
      ({

        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //  editUrl:
          //  'nuh uh',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      
      }),
    ],
  ],

  themeConfig:


    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      announcementBar: {
        id: 'outdated',
        content:'This website is outdated and is currently being redone',
        backgroundColor: 'var(--primary-400)',
       textColor: '#000',
       isCloseable: false,
      },
      
      colorMode: {
        "defaultMode": "dark",
        "respectPrefersColorScheme": false,
        "disableSwitch": true,
      },
      // Replace with your project's social card
      image: 'https://i.imgur.com/9qmrYKK.jpg',

     
    }),
};

export default config;
