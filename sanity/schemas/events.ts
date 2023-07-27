import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
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
      name: 'date',
      type: 'date',
      title: 'Date',
    }),
    defineField({
      name: 'time',
      type: 'string',
      title: 'Time',
    }),
    defineField({
      name: 'venue',
      type: 'string',
      title: 'Venue',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
})
