// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
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
});
