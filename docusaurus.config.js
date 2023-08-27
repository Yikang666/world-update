// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '地球Online服务器',
  tagline: '世界最大的服务器 在线玩家80亿+',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://world.iblog.gq',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Yikang666/world-update/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '地球Online',
        logo: {
          alt: '地球Online',
          src: 'img/earth.svg',
        },
        // items: [
        //   {
        //     href: 'https://github.com/facebook/docusaurus',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '更新说明',
                to: '/docs/category/更新说明',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: "Yikang's Blog 🥝",
                href: 'https://www.iblog.gq',
              },
            ],
          },
          // {
          //   title: '更多',
          //   items: [
          //     {
          //       label: '本项目GitHub',
          //       href: 'https://github.com/Yikang666/123',
          //     },
          //   ],
          // },
        ],
        copyright: 
          `
          <br>
          Copyright © ${new Date().getFullYear()} 地球Online服务器
          <br>
          <span>使用 <a href="https://www.docusaurus.cn/" target="_blank" class="footer__link-item">Docusaurus</a> 构建</span>
          `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;