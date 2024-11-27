import { defineCollection, z } from '@nuxt/content'

const schema = z.object({
  navigation: z.object({
    title: z.string().optional(),
    framework: z.string().optional()
  }),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    to: z.string(),
    target: z.string().optional()
  }))
})

// const source = process.env.NUXT_UI_PRO_PATH
//   ? {
//       cwd: process.env.NUXT_UI_PRO_PATH,
//       path: 'docs'
//     }
//   : process.env.NUXT_GITHUB_TOKEN
//     ? {
//         repository: 'nuxt/ui-pro',
//         branch: 'v3',
//         dir: 'docs',
//         token: process.env.NUXT_GITHUB_TOKEN
//       }
//     : undefined

export const collections = {
  // pro: source && defineCollection({
  //   type: 'page',
  //   source,
  //   schema
  // }),
  content: defineCollection({
    type: 'page',
    source: '**/*',
    schema
  })
}
