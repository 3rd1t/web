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
}

export function translate(locale: string): { [key: string]: string } {
  const translated = {}
  Object.entries(translations).map((t) => {
    translated[t[0]] = t[1][locale]
  })
  return translated
}
