type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "CodePost",
  description: "A simple blogging site.",
  url: "https://codepost.vercel.app",
  ogImage: "https://codepost.vercel.app/og",
  links: {
    twitter: "https://x.com/harshalvk",
    github: "https://github.com/Harshalvk",
  },
};
