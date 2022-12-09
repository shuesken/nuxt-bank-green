import en from "~~/lang/en.json";

export const useLocale = () =>
  useState<string>("locale", () => useDefaultLocale().value);

export const useDefaultLocale = (fallback = "en-us") => {
  const locale = ref(fallback);
  if (process.server) {
    const reqLocale = useRequestHeaders()["accept-language"]?.split(",")[0];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (process.client) {
    const navLang = navigator.language;
    if (navLang) {
      locale.value = navLang;
    }
  }
  return locale;
};

export const isBE = () => {
  const locale = useLocale();
  const localeObj = new Intl.Locale(locale.value);
  if (localeObj.region && ["UK", "IR", "GB"].includes(localeObj.region))
    return true;
  return false;
};

export const useCountry = () =>
  useState<string>("country", () => useDefaultCountry().value);

export const useDefaultCountry = () => {
  const locale = useLocale();
  const country = ref("US");
  const localeObj = new Intl.Locale(locale.value);
  const region = localeObj.region;
  if ((<{ [x: string]: string }>en)[`COUNTRY_${region}`])
    country.value = region as string;
  return country;
};
