import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export default defineConfig({
  lang: "en-US",
  title: "Exposition",
  description:
    "Exposition Magazine, most outstanding magazine of the year to bridge the gap between Management and IT platforms which is one of the leading university business magazines to mark the footprints of undergraduates to the Cooperate World.",

  lastUpdated: true,
  cleanUrls: true,

  head: [["meta", { name: "theme-color", content: "#3c8772" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/magazine/": sidebarMagazine(),
    },

    socialLinks: [
      {
        icon: "facebook",
        link: "https://m.facebook.com/Exposition.MIT",
      },
      {
        icon: "instagram",
        link: "https://www.linkedin.com/company/theexposition/",
      },
      {
        icon: "linkedin",
        link: "https://www.instagram.com/exposition_lk/?hl=en",
      },
    ],

    footer: {
      copyright: "Copyright © 2023-Exposition",
    },

    // algolia: {
    //   appId: "8J64VVRP8K",
    //   apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //   indexName: "vitepress",
    // },
  },
});

function nav() {
  return [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Magazine",
      link: "/magazine/what-is-vitepress",
      activeMatch: "/magazine/",
    },
    {
      text: "Team",
      link: "/team",
      activeMatch: "/team",
    },
    {
      text: "Sponsors",
      link: "/sponsors",
      activeMatch: "/sponsors",
    },
  ];
}

function sidebarMagazine() {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is VitePress?", link: "/magazine/what-is-vitepress" },
        { text: "Getting Started", link: "/magazine/getting-started" },
        { text: "Configuration", link: "/magazine/configuration" },
        { text: "Routing", link: "/magazine/routing" },
        { text: "Deploying", link: "/magazine/deploying" },
        { text: "Internationalization", link: "/magazine/i18n" },
      ],
    },
    {
      text: "Writing",
      collapsed: false,
      items: [
        { text: "Markdown", link: "/magazine/markdown" },
        { text: "Asset Handling", link: "/magazine/asset-handling" },
        { text: "Frontmatter", link: "/magazine/frontmatter" },
        { text: "Using Vue in Markdown", link: "/magazine/using-vue" },
        { text: "API Reference", link: "/magazine/api" },
      ],
    },
    {
      text: "Theme",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/magazine/theme-introduction" },
        { text: "Nav", link: "/magazine/theme-nav" },
        { text: "Sidebar", link: "/magazine/theme-sidebar" },
        { text: "Prev Next Link", link: "/magazine/theme-prev-next-link" },
        { text: "Edit Link", link: "/magazine/theme-edit-link" },
        { text: "Last Updated", link: "/magazine/theme-last-updated" },
        { text: "Layout", link: "/magazine/theme-layout" },
        { text: "Home Page", link: "/magazine/theme-home-page" },
        { text: "Team Page", link: "/magazine/theme-team-page" },
        { text: "Badge", link: "/magazine/theme-badge" },
        { text: "Footer", link: "/magazine/theme-footer" },
        { text: "Search", link: "/magazine/theme-search" },
        { text: "Carbon Ads", link: "/magazine/theme-carbon-ads" },
      ],
    },
    {
      text: "Migrations",
      collapsed: false,
      items: [
        {
          text: "Migration from VuePress",
          link: "/magazine/migration-from-vuepress",
        },
        {
          text: "Migration from VitePress 0.x",
          link: "/magazine/migration-from-vitepress-0",
        },
      ],
    },
  ];
}
