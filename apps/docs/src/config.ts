export const SITE = {
  title: "Astro Reactive",
  description: "Documentation for the Astro Reactive Library",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/ayoayco/astro-reactive-library/tree/main/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    // TODO: create tutorial
    // Tutorial: [
    //   { text: "Getting Started", link: "en/getting-started" },
    //   { text: "Page 2", link: "en/page-2" },
    //   { text: "Page 3", link: "en/page-3" },
    // ],

    // TODO: create overview
    Introduction: [
      { text: "Overview", link: "en/introduction" },
      // { text: "Philosophy", link: "en/philosophy" },
    ],

    "API Docs": [
      { text: "Form", link: "en/api/form/form-component" },
      { text: "FormGroup", link: "en/api/form/form-group" },
      { text: "FormControl", link: "en/api/form/form-control" },
    ],
  },
};
