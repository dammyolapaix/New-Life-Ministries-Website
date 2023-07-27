import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'activity',
  type: 'document',
  title: 'Activity',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'time',
      type: 'string',
      title: 'time',
    }),
    defineField({
      name: 'days',
      type: 'string',
      title: 'days',
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'location',
    }),
    defineField({
      name: 'branch',
      type: 'reference',
      title: 'branch',
      to: {type: 'branch'},
    }),
  ],
})
