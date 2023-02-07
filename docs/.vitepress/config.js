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
  ignoreDeadLinks: true,
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
      text: "Partners",
      link: "/partners",
      activeMatch: "/partners",
    },
  ];
}

function sidebarMagazine() {
  return [
    {
      text: "Interviews",
      collapsed: false,
      items: [
        {
          text: "Main",
          collapsed: true,
          items: [
            { text: "Peter D' Almeida", link: "/magazine/what-is-vitepress" },
            { text: "Dhanushka Fernando", link: "/magazine/getting-started" },
            { text: "Daddy", link: "/magazine/configuration" },
            { text: "Yasas Hewage", link: "/magazine/routing" },
          ],
        },
        {
          text: "365*4",
          collapsed: true,
          items: [
            { text: "365*4 - (1)", link: "/magazine/deploying" },
            { text: "365*4 - (2)", link: "/magazine/i18n" },
            { text: "365*4 - (3)", link: "/magazine/i18n" },
            { text: "365*4 - (4)", link: "/magazine/i18n" },
          ],
        },
        {
          text: "Past Mitians",
          collapsed: true,
          items: [
            { text: "Past Mitians (1) ", link: "/magazine/getting-started" },
            { text: "Past Mitians (2) ", link: "/magazine/configuration" },
          ],
        },
        {
          text: "Appraisals",
          collapsed: true,
          items: [
            { text: "Appraisals (1) Unilever", link: "/magazine/routing" },
            {
              text: "Appraisals (2) ShoutOUT Labs",
              link: "/magazine/deploying",
            },
          ],
        },
        {
          text: "Spirits",
          collapsed: true,
          items: [
            { text: "Spirits (1)", link: "/magazine/i18n" },
            { text: "Spirits (2)", link: "/magazine/i18n" },
            { text: "Spirits (3)", link: "/magazine/i18n" },
          ],
        },
      ],
    },
    {
      text: "Student Corner",
      collapsed: false,
      items: [
        { text: "AI and Unemployment", link: "/magazine/markdown" },
        { text: "Emo", link: "/magazine/asset-handling" },
        { text: "Chatbot", link: "/magazine/frontmatter" },
        { text: "Industry 5.0", link: "/magazine/using-vue" },
        { text: "Power skills as DA", link: "/magazine/api" },
        { text: "Age of Superheros", link: "/magazine/api" },
      ],
    },
    {
      text: "Expert Insights",
      collapsed: false,
      items: [
        { text: "Expert Insights (1)", link: "/magazine/theme-introduction" },
        { text: "Expert Insights (2)", link: "/magazine/theme-nav" },
      ],
    },
    {
      text: "R&D",
      collapsed: false,
      items: [{ text: "SCSE", link: "/magazine/theme-introduction" }],
    },
    {
      text: "IMSSA Events",
      collapsed: false,
      items: [
        { text: "HackX", link: "/magazine/theme-introduction" },
        { text: "Hack Jr", link: "/magazine/theme-nav" },
        { text: "Edify", link: "/magazine/theme-sidebar" },
        { text: "Info Studio", link: "/magazine/theme-prev-next-link" },
        { text: "Other", link: "/magazine/theme-edit-link" },
      ],
    },
    {
      text: "Miscellaneous",
      collapsed: false,
      items: [
        {
          text: "UOK",
          link: "/magazine/migration-from-vuepress",
        },
        {
          text: "MIT",
          link: "/magazine/migration-from-vitepress-0",
        },
        {
          text: "DIM",
          link: "/magazine/migration-from-vitepress-0",
        },
        {
          text: "EEC",
          link: "/magazine/migration-from-vitepress-0",
        },
        {
          text: "HYD",
          link: "/magazine/migration-from-vitepress-0",
        },
      ],
    },
  ];
}
