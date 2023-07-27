import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'branch',
  type: 'document',
  title: 'Branch',
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
  ],
})
