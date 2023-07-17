import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'finance',
  type: 'document',
  title: 'Finance',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'report',
      type: 'file',
      title: 'Report',
    }),
  ],
})
