// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Visionary.ai',
  tagline: 'Image analysis AI API documentation',
  favicon: 'img/favicon.ico',

  url: 'https://berangeregallais.github.io',
  baseUrl: '/visionary-ai/',
  deploymentBranch: 'gh-pages',

  organizationName: 'berangeregallais',
  projectName: 'visionary-ai',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/social-card.png',
    navbar: {
      title: 'Visionary.ai',
      logo: {
        alt: 'Visionary.ai Logo',
        src: 'img/logo-visionary.svg'
      },
      items: [
        {
          href: 'https://github.com/berangeregallais/visionary-ai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/berangeregallais/visionary-ai',
            },
            {
              label: 'Contact',
              href: 'mailto:gallaisberangere@gmail.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Visionary.ai – Fictional Documentation realised by Berangere Gallais`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),

};

export default config;
