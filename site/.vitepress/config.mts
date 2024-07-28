import { defineConfig } from 'vitepress';
import typedocSidebar from '../scripting/typedoc-sidebar.json';
import { SearchPlugin } from 'vitepress-plugin-search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Web Client - ClassicUO',
  description: 'Web Client - ClassicUO',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  sitemap: {
    hostname: 'https://classicuo.org'
  },
  vite: {
    plugins: [
      SearchPlugin({
        previewLength: 62,
        buttonLabel: 'Search',
        placeholder: 'Search docs',
        preset: 'match',
        allow: [],
        ignore: []
      })
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [4, 5],
    logo: '/images/cuo-logo.png',
    editLink: {
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/ClassicUO/classicuo-web/edit/main/site/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Scripting', link: '/scripting/globals' }
    ],
    sidebar: [
      {
        text: 'Home',
        items: [{ text: 'About', link: '/about' }]
      },
      {
        text: 'Players',
        items: [
          { text: 'FAQ', link: '/players/faq.md' },
          {
            text: 'Features',
            items: [
              { text: 'Action Bar', link: '/features/action-bar.md' },
              { text: 'Autoloot', link: '/features/autoloot.md' },
              { text: 'Chat', link: '/features/chat.md' },
              { text: 'Game Profiles', link: '/features/game-profiles.md' },
              { text: 'Game Options', link: '/features/game-options.md' },
              { text: 'Grid Containers', link: '/features/grid-containers.md' },
              // TODO
              // { text: 'Hotkeys', link: '/features/hotkeys.md' },
              // { text: 'Scripting', link: '/features/scripting.md' },
              { text: 'Tooltips', link: '/features/tooltips.md' }
            ]
          }
        ]
      },
      {
        text: 'Shard Owners',
        items: [
          { text: 'FAQ', link: '/shard-owners/faq.md' },
          { text: 'Patching', link: '/shard-owners/patching.md' },
          { text: 'Shard Rules', link: '/shard-owners/shard-rules.md' }
        ]
      },
      {
        text: 'Scripting',
        items: [{ text: 'Globals', link: '/scripting/globals' }, ...typedocSidebar]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClassicUO/ClassicUO' },
      { icon: 'discord', link: 'https://discord.com/invite/VdyCpjQ' }
    ]
  }
});
