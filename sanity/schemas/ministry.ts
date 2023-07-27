import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ministry',
  type: 'document',
  title: 'Ministry',
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
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
})
