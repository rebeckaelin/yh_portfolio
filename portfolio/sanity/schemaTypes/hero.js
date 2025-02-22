import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
