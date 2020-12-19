export interface Translations {
  [key: string]: Translation;
}

export interface Translation {
  en: string;
  de: string;
}

export const translations: Translations = {
  headline: {
    en: "Portfolio analytics insights for everyone",
    de: "Portfolioanalyse für alle",
  },
  subline: {
    en:
      "Keeping track of all your assets and their performance is hard. Perfolio brings all information to one place and gives you access to the latest analytics methods in science.",
    de:
      "Es ist nicht einfach den Überblick über all Deine Vermögenswerte und deren Performance zu behalten. Perfolio vereint alle Informationen an einem Ort und gibt Dir Zugang zu den neuesten Analysemethoden aus der Finanzwissenschaft.",
  },
  signin: {
    en: "Sign in",
    de: "Log in",
  },
  signup: {
    en: "Sign up",
    de: "Anmelden",
  },

  contact: {
    en: "Contact us",
    de: "Kontakt",
  },
  whyPerfolio: {
    en: "Why Perfolio?",
    de: "Warum Perfolio?",
  },
  whyPerfolioSubline: {
    en: "Make decisions based on data",
    de: "Fälle Entscheidungen basierend auf Daten",
  },
  independent: {
    en: "Independent",
    de: "Unabhängig",
  },
  independentDescription: {
    en:
      "We are not part of any bank or insurance company. We give you an unbiased view of your portfolio, not selling any investment products.",
    de:
      "Wir agieren komplett unabhängig von finanziellen Institutionen. Von uns bekommst Du einen unvoreingenommenen Blick auf Dein Portfolio - ohne Dir etwas verkaufen zu wollen.",
  },
  complexMadeEasy: {
    en: "Complex made easy",
    de: "Einfache Darstellung von komplexen Inhalten",
  },
  complexMadeEasyDescription: {
    en:
      "Everybody should have access to the latest analytics methods in science. Making these methods as simple and understandable as possible is part of our core business.",
    de:
      "Jeder sollte Zugang zu den neuesten Analysemethoden aus der Wissenschaft haben. Diese Methoden so einfach und verständlich wie möglich darzustellen, gehört zu unserem Kerngeschäft.",
  },
  allInOnePlace: {
    en: "All in one place",
    de: "Alle Vermögenswerte an einem Ort",
  },
  allInOnePlaceDescription: {
    en:
      "Tired of visiting several websites and apps to get an overview of your assets? Perfolio is the new home for your data.",
    de:
      "Keine Lust mehr, diverse Websites und Apps zu besuchen, um Dir einen Überblick über Dein Vermögen zu verschaffen? Perfolio ist das neue Zuhause für Deine Daten.",
  },
  highestDataQuality: {
    en: "Highest data quality",
    de: "Höchste Datenqualität",
  },
  highestDataQualityDescription: {
    en:
      "We cleanse and analyze data according to the highest standards. With our Premium plan you get access to even better data quality.",
    de:
      "Wir bereinigen und analysieren Daten nach den höchsten Standards. Mit unserem Premiumplan erhälst Du Zugang zu einer noch besseren Datenqualität.",
  },
  privacyAndSecurity: {
    en: "Privacy and Security",
    de: "Datenschutz und Sicherheit",
  },
  privacyAndSecurityDescription: {
    en:
      "We do not share your data with anyone else and store them only on servers within the EU. Privacy and security are our highest priority.",
    de:
      "Wir geben Deine Daten niemals weiter und speichern sie nur auf Servern innerhalb der EU. Datenschutz und Sicherheit haben für uns höchste Priorität.",
  },
  fairPricing: {
    en: "Fair pricing",
    de: "Faire Preise",
  },
  fairPricingDescription: {
    en:
      "Start for free! If you want more, get the plan that suits you best. No hidden fees.",
    de:
      "Starte gratis! Wenn Du mehr willst, hol Dir den Plan, der am besten zu Dir passt. Keine versteckten Gebühren.",
  },
  ourTeam: {
    en: "Our Team",
    de: "Unser Team",
  },
  ourTeamDescription: {
    en: "Who is behind this?",
    de: "Wer steckt dahinter?"
  },
  perfolioDescription1: {
    en:
      "At Perfolio, we believe that investment decisions should always be based on as much well-founded information as possible. It is our mission to provide our users the most relevant and accurate financial information available.",
    de:
      "Wir, bei Perfolio, sind der Meinung, dass Investitionsentscheidungen immer auf möglichst vielen fundierten Informationen beruhen sollten. Es ist unsere Mission, unseren Benutzern die relevantesten und genauesten Finanzinformationen zur Verfügung zu stellen.",
  },
  perfolioDescription2: {
    en:
      "We are a motivated team of enthusiastic techies who are passionate about capital market topics. Bringing together different backgrounds and skills, we want to revolutionize the way investors track their assets and measure the success of their investment strategy. We are always happy to chat - drop us a message!",
    de:
      "Wir sind ein motiviertes Team von begeisterten Techies und brennen für neue Technologien und Kapitalmärkte. Wir revolutionieren die Art und Weise, wie Anleger ihr Vermögen verwalten und die Performance ihrer Anlagestrategie messen. Unsere unterschiedlichen Backgrounds und Skills helfen uns bei diesem Vorhaben maßstäblich. Für einen Austausch sind wir immer offen - schreib uns gerne eine Nachricht!",
  },
  product: {
    en: "Product",
    de: "Product",
  },
  tech: {
    en: "Tech",
    de: "Tech",
  },
  sales: {
    en: "Sales",
    de: "Sales",
  },
  marketing: {
    en: "Marketing",
    de: "Marketing",
  },
  cta: {
    en: "Curious for more?",
    de: "Du willst mehr erfahren?",
  },
  ctaSubline: {
    en: "Create an account:",
    de: "Erstelle einen Account:",
  },
};

export function translate(locale: string): { [key: string]: string } {
  if (!["en", "de"].includes(locale)) {
    console.warn(`locale "${locale}" is not supported, defaulting to english`);
    locale = "en";
  }

  const translated = {};
  Object.entries(translations).forEach((t) => {
    translated[t[0]] = t[1][locale];
  });
  return translated;
}
