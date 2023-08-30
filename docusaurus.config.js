// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '地球Online服务器',
  tagline: '开服46亿年 超80亿人同台竞技',
  favicon: '/favicon.ico',

  // Set the production url of your site here
  url: 'https://world.iblog.gq',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/Yikang666/world-update/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // headTags: [
    // {
    //   tagName: 'link',
    //  attributes: {
    //     rel: 'icon',
    //     href: '/img/docusaurus.png',
    //   },
    // },
  // ],

  scripts: [
    // '',
      {
        async: true,
        id: 'LA_COLLECT',
        src: '//sdk.51.la/js-sdk-pro.min.js?id=3FkViTHA3WsTgz5t&ck=3FkViTHA3WsTgz5t',
      },
  ],

  stylesheets: [
    // '',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: '地球Online',
        logo: {
          alt: '地球Online',
          src: '/img/earth.svg',
        },
        hideOnScroll: true,
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
                to: '/category/更新说明',
              },
              {
                label: '萌新入坑指南',
                to: '/guide',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: '地球OL服务器的个人空间',
                href: 'https://space.bilibili.com/3537114889193811',
              },
              {
                label: "炒饭社区",
                href: 'https://choa.fun',
              },
              {
                label: "Yikang's Blog 🥝",
                href: 'https://www.iblog.gq',
              },
            ],
          },
          {
            title: '更多',
            items: [
              //{
              //  label: '本项目GitHub',
              //  href: 'https://github.com/Yikang666/123',
              //},
            ],
          },
        ],
        copyright: 
          `
          <br>
          Copyright © ${new Date().getFullYear()} 地球Online服务器
          <br>
          <script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/3FkViTHA3WsTgz5t/quote.js?theme=#33D279,#333333,#999999,#EBEDF0,#FFFFFF,#33D279,14&f=14&display=0,0,0,1,0,0,1,1"></script>
          <br>
          <a href="https://www.docusaurus.cn/" target="_blank" title="使用Docusaurus构建"><img style="height: 50px; margin-top: 0.5rem" alt="使用Docusaurus构建" src="/img/buildwith.png"></img></a>
          `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '21AVD8V1ZJ',
        apiKey: '1edc7d5639a9a90ddfc797b00eda9fd8',
        indexName: 'world',
      }
    }),
};

module.exports = config;