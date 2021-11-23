const baseStrings = {
  /** Routes */
  "routes.home": "/",
  "routes.summary": "/summary",
  "routes.extra": "/extra",

  /** Page content */
  "home.title": "Home",
  "home.contentTitle": "Welcome to Home",
  "home.contentParagraph": "As you will see, this page works in any language",

  "summary.title": "Summary",
  "summary.contentTitle": "This is the summary of the page",
  "summary.contentParagraph": "just how every summary should be",

  "extra.title": "Extra",
  "extra.contentTitle": "This is the extras section",
  "extra.contentParagraph":
    "since you've come this far, I'll leave you the tutorial link :D",
  "extra.devtoLink": "Link to the tutorial on dev.to",
  "extra.githubLink": "Link to the Github repository",

  "error.title": "Error",
  "error.contentParagraph": "The path you entered does not exist",
};

export type LanguageStrings = typeof baseStrings;
export const en = baseStrings;
