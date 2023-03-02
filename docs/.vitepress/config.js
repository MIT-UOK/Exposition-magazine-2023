import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export default defineConfig({
  lang: "en-US",
  title: " ",
  titleTemplate: "Exposition",
  description:
    "Exposition Magazine, most outstanding magazine of the year to bridge the gap between Management and IT platforms which is one of the leading university business magazines to mark the footprints of undergraduates to the Cooperate World.",
  appearance: "dark",
  lastUpdated: true,
  // cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ["meta", { name: "theme-color", content: "#3c8772" }],
    ["link", { rel: "icon", href: "/images/logo/logo.png" }],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),
    logo: "/images/logo/logo.png",
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
      link: "/magazine/interviews/dhanushka-fernando",
      activeMatch: "/magazine/*",
    },
    {
      text: "Partners",
      link: "/partners",
      activeMatch: "/partners",
    },
    {
      text: "E-Magazine",
      link: "https://emagazine.exposition.lk/",
    },
    // {
    //   text: "Exposition",
    //   items: [
    //     {
    //       text: "E-Magazine",
    //       link: "https://emagazine.exposition.lk/",
    //     },
    //     {
    //       text: "Contributing",
    //       link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
    //     },
    //   ],
    // },
  ];
}

function sidebarMagazine() {
  return [
    {
      text: "Interviews",
      collapsed: false,
      items: [
        {
          text: "Mr. Dhanushka Fernando",
          link: "/magazine/interviews/dhanushka-fernando",
        },
        {
          text: "Mr. Peter D’Almeida",
          link: "/magazine/interviews/peter-d-almeida",
        },
        {
          text: "Ms. Gayani Gamage",
          link: "/magazine/interviews/gayani-gamage",
        },
        {
          text: "Mr. Viresh Cooray",
          link: "/magazine/interviews/viresh-cooray",
        },
      ],
    },
    {
      text: "Exposition Segments",
      collapsed: true,
      items: [
        {
          text: "Exposition Entrepreneurial Community",
          link: "/magazine/exposition-segments/exposition-entrepreneurial-community",
        },
        {
          text: "How You Did It?",
          link: "/magazine/exposition-segments/how-you-did-it",
        },
        { text: "Edify", link: "/magazine/exposition-segments/edify" },
      ],
    },
    {
      text: "MITians",
      collapsed: true,
      items: [
        {
          text: "Department of Industrial Management",
          link: "/magazine/mitians/department-of-industrial-management",
        },
        {
          text: "Management and Information Technology",
          link: "/magazine/mitians/management-and-information-technology",
        },
        {
          text: "IM Spirits",
          collapsed: true,
          items: [
            {
              text: "Chiran Hewawitharana",
              link: "/magazine/mitians/im-spirits/chiran-hewawitharana",
            },
            {
              text: "Anuradha Jayatilaka",
              link: "/magazine/mitians/im-spirits/anuradha-jayatilaka",
            },
            {
              text: "Lahiru Senarath Adikari",
              link: "/magazine/mitians/im-spirits/lahiru-senarath-adikari",
            },
          ],
        },
        {
          text: "365*4",
          collapsed: true,
          items: [
            { text: "365*1", link: "/magazine/mitians/365x4/365x1" },
            { text: "365*2", link: "/magazine/mitians/365x4/365x2" },
            { text: "365*3", link: "/magazine/mitians/365x4/365x3" },
            { text: "365*4", link: "/magazine/mitians/365x4/365x4" },
          ],
        },
        {
          text: "Appraisals",
          collapsed: true,
          items: [
            { text: "Unilever", link: "/magazine/mitians/appraisals/unilever" },
            {
              text: "ShoutOUT Labs",
              link: "/magazine/mitians/appraisals/shout-out-labs",
            },
          ],
        },
      ],
    },
    {
      text: "Expert Insights",
      collapsed: true,
      items: [
        {
          text: "Is Data Scientist a Dragon?",
          link: "/magazine/expert-insights/is-data-scientist-a-dragon",
        },
        {
          text: "Establishing an Electronic Industry in Sri Lanka",
          link: "/magazine/expert-insights/establishing-an-electronic-industry-in-sri-lanka",
        },
      ],
    },
    {
      text: "Students’ Corner",
      collapsed: true,
      items: [
        {
          text: "Artificial Intelligence and Unemployment",
          link: "/magazine/students-corner/artificial-intelligence-and-unemployment",
        },
        {
          text: "Power Skills to Stand Out as a Data Scientist",
          link: "/magazine/students-corner/power-skills-to-stand-out-as-a-data-scientist",
        },
        {
          text: "Age of Superheroes is Here",
          link: "/magazine/students-corner/age-of-superheroes-is-here",
        },
        {
          text: "Meet EMO: New Friendly AI",
          link: "/magazine/students-corner/meet-emo_new-friendly-ai",
        },
        {
          text: "Chatbots: For Improved Customer Engagement",
          link: "/magazine/students-corner/chat-bots_for-improved-customer-engagement",
        },
        {
          text: "Industry 5.0: The future of Industrial Manufacturing",
          link: "/magazine/students-corner/industry-5_the-future-of-industrial-manufacturing",
        },
      ],
    },

    {
      text: "Research & Development",
      collapsed: true,
      items: [
        { text: "SCSE", link: "/magazine/research-and-development/scse" },
      ],
    },
    {
      text: "IMSSA Events",
      collapsed: true,
      items: [
        { text: "HackX", link: "/magazine/imssa-events/hackx" },
        { text: "InfoStudio", link: "/magazine/imssa-events/info-studio" },
        { text: "HackXJr", link: "/magazine/imssa-events/hackx-jr" },
      ],
    },
    {
      text: "Alma Mater",
      collapsed: true,
      items: [
        {
          text: "University of Kelaniya",
          link: "/magazine/alma-mater/university-of-kelaniya",
        },
      ],
    },
  ];
}
