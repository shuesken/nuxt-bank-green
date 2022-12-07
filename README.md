Running at https://nuxt.bank.green

# Setup

Install dependencies:
`npm i`

# Development

`npm run dev`

# Deployment

We need `wrangler`, the Cloudflare worker CLI.
Install wrangler:
`npm i -g wrangler`

Login:
`wrangler login`

Build the server with wrangler
`npm run build`

Preview the server with local wrangler
`npm run preview`

Publish to `nuxt.bank.green`
`npm run publish`

# Prismic

Check out `contact.vue` for an integration of Prismic; go to https://bank-green.prismic.io to make changes to the topmost field there.

# Known issues

- Have to click twice on a bank in the search form (likely due to new `clickaway.ts`)
- Using `node_compat = true` in `wrangler.toml`
- Pages using markdown (e.g.. `blog/`) were moved because I didn't want to migrate the markdown renderer, we'll use Prismic for these anyway, and storing the `.md` files next to the `.vue` files confuses Nuxt and messes up the build.
- `isUK`, our variable for homegrown localization, is not used properly
- wrangler throws some error related to particularities of i18N, which I believe we will remove anyway
- We're using the Vue Composition API in all components, but only some of them use [SFCs (single-file components)](https://vuejs.org/guide/scaling-up/sfc.html) (i.e. `<script setup>`. Nuxt is fairly opinionated about this with its magic and we should be using SFCs everywhere, so I migrate them whenever I see them.)
