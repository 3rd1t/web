export interface Translations {
  [key: string]: Translation
}

export interface Translation {
  en: string
  de: string
}




export const translations: Translations = {


  headline: {
    en: "Portfolio analytics insights for everyone",
    de: "Portfolio Analyse für jedermann",
  },
  subline: {
    en:
      "Keeping track of all your assets and their performance is hard. Perfolio brings all information to one place and gives you access to the latest analytics methods in science.",
    de:
      "Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio Wehrfolio  ",
  },
  signin: {
    en: "Sign in",
    de: "Log in",
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
    en: "Make decisions based on data.",
    de: "",
  },
  independend: {
    en: "Independend",
    de: "Unabhängig",
  },
  independendDescription: {
    en:
      "We are not part of any bank or insurance company. We give you an unbiased view of your portfolio, not selling any investment products.",
    de: "Unabhängig",
  },
  complexMadeEasy: {
    en: "Complex made easy",
    de: "",
  },
  complexMadeEasyDescription: {
    en:
      "Everybody should have access to the latest analytics methods in science. Making these methods as simple and understandable as possible is part of our core business.",
    de: "",
  },
  allInOnePlace: {
    en: "All in one place",
    de: "",
  },
  allInOnePlaceDescription: {
    en:
      "Tired of visiting several websites and apps to get an overview of your assets? Perfolio is the new home for your data.",
    de: "",
  },
  highestDataQuality: {
    en: "Highest data quality",
    de: "",
  },
  highestDataQualityDescription: {
    en:
      "We cleanse and analyze data according to the highest standards. With our Premium plan you get access to even better data quality.",
    de: "",
  },
  privacyAndSecurity: {
    en: "Provacy and Security",
    de: "",
  },
  privacyAndSecurityDescription: {
    en:
      "We do not share your data with anyone else and store them only on servers within the EU. Privacy and security are our highest priority.",
    de: "",
  },
  fairPricing: {
    en: "Fair pricing",
    de: "",
  },
  fairPricingDescription: {
    en: "Start for free! If you want more, get the plan that suits you best. No hidden fees.",
    de: "",
  },
  ourTeam: {
    en: "Our Team",
    de: "Unser Team",
  },
  perfolioDescription1: {
    en:
      "At Perfolio, we believe that investment decisions should always be based on as much well-founded information as possible. It is our mission to provide our users the most relevant and accurate financial information available.",
    de: "",
  },
  perfolioDescription2: {
    en:
      "We are a motivated team of enthusiastic techies who are passionate about capital market topics. Bringing together different backgrounds and skills, we want to revolutionize the way investors track their assets and measure the success of their investment strategy. We are always happy to chat - drop us a message!",
    de: "",
  },
  product: {
    en: "Product",
    de: "Produkt",
  },
  tech: {
    en: "Tech",
    de: "Tech",
  },
  sales: {
    en: "Sales",
    de: "Verkauf",
  },
  marketing: {
    en: "Marketing",
    de: "",
  },
  cta: {
    en: "Curious for more?",
    de: "Digga gönn dir",
  },
  ctaSubline: {
    en: "Follow us on ",
    de: "Folgt uns auf ",
  },
}

export function translate(locale: string): { [key: string]: string } {
  const translated = {}
  Object.entries(translations).map((t) => {
    translated[t[0]] = t[1][locale]
  })
  return translated
}
