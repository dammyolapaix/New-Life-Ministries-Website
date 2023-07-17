import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pastor',
  type: 'document',
  title: 'Pastor',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'rank',
      type: 'string',
      title: 'Rank',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
})
