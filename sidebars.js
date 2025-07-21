// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduction', 
      label: '🔍 Introduction',
    },
    {
      type: 'doc',
      id: 'getting-started', 
      label: '🚀 Getting Started',
    },
    {
      type: 'category',
      label: '📡 API Endpoints',
      collapsed: false,
      items: [
        'api/analyse',
        'api/emotion',
        'api/metadata',
        'api/nsfw-filter'
      ],
    },
    {
      type: 'category',
      label: '🧠 SDK',
      collapsed: false,
      items: [
        'sdk/android-quickstart',
        'sdk/ios-quickstart',
        'sdk/common-use-cases',
        'sdk/integration-troubleshooting'
      ],
    },
    {
      type: 'doc',
      id: 'faq', 
      label: '❓ Frequently Asked Questions (FAQ)',
    },
  ],
};

export default sidebars;
