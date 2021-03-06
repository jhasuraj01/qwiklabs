const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '30 Days of Google Cloud',
  tagline: 'Refer these docs along with video',
  url: 'https://jhasuraj.com',
  baseUrl: '/qwiklabs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'jhasuraj01', // Usually your GitHub org/user name.
  projectName: 'qwiklabs', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/labs.js'),
          routeBasePath: "labs",
          editUrl: 'https://github.com/jhasuraj01/qwiklabs/tree/main/',
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: true,
        // Please change this to your repo.
        // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      hideableSidebar: true,
      announcementBar: {
        content: "First Quest and Challenge Lab is Completed and all the resources are uploaded on this Website and YouTube Channel.",
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: 'black',
        id: "04-10-2021",
      },
      navbar: {
        title: 'Qwiklabs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Challenge labs',
          },
          //   {to: '/blog', label: 'Blog', position: 'left'},
          //   {
          //     href: 'https://github.com/facebook/docusaurus',
          //     label: 'GitHub',
          //     position: 'right',
          //   },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Challenge Labs',
                to: '/labs/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jhasuraj01/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/jhasuraj01/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/jhasuraj01/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/jhasuraj01/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://jhasuraj.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jhasuraj01/',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Suraj Jha.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
