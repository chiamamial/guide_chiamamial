import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        coverImage: fields.image({
            label: 'Cover Image',
            directory: 'public/images/posts',
            publicPath: '/images/posts/',
        }),
        color: fields.select({
            label: 'Post-it Color',
            options: [
                { label: 'Yellow', value: 'yellow' },
                { label: 'Pink', value: 'pink' },
                { label: 'Blue', value: 'blue' },
                { label: 'Green', value: 'green' },
            ],
            defaultValue: 'yellow'
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
