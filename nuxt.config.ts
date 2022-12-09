// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
import en from "./lang/en.json";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/prismic", "@nuxtjs/i18n"],
  prismic: {
    endpoint: "https://bankgreen.prismic.io/api/v2",
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        clickaway: () => ({
          props: [],
          needRuntime: true,
        }),
      },
    },
  },
  css: ["@/styles/style.css"],
  routeRules: {
    "/sustainable-ethical-banks": { redirect: "/sustainable-eco-banks" },
  },
  i18n: {
    vueI18n: {
      legacy: false,
      globalInjection: true,
      locale: "en",
      messages: {
        en,
      },
      fallbackLocale: "en",
    },
  },
});
