export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type NavItem = {
  id: string;
  label: LocalizedText;
};

export type ContactProfile = {
  id: string;
  current: boolean;
  label: LocalizedText;
  organization: LocalizedText;
  address: LocalizedText;
  email: string;
  phone?: string;
};

export type ProfileContent = {
  name: LocalizedText;
  role: LocalizedText;
  intro: LocalizedText;
  contacts: ContactProfile[];
  focus: LocalizedText[];
  actions: {
    primary: LocalizedText;
    secondary: LocalizedText;
  };
};

export type SiteContent = {
  navigation: NavItem[];
  profile: ProfileContent;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  scenario: LocalizedText;
  work: LocalizedText;
  impact: LocalizedText;
  technologies: string[];
  repositoryUrl?: string;
  featured?: boolean;
};

export type PortfolioSection = {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type ResearchArea = {
  title: LocalizedText;
  description: LocalizedText;
  keywords: string[];
};

export type Thought = {
  title: LocalizedText;
  body: LocalizedText;
};

export type HobbyContent = {
  title: LocalizedText;
  body: LocalizedText;
  repositoryUrl: string;
  workshopUrl: string;
};

export type TimelineItem = {
  period: LocalizedText;
  title: LocalizedText;
  organization: LocalizedText;
  description: LocalizedText;
};

export type Award = {
  title: LocalizedText;
  issuer: LocalizedText;
  period?: LocalizedText;
};

export type SkillGroup = {
  title: LocalizedText;
  skills: string[];
};

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "zh";
}

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
