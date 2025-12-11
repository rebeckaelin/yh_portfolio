import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'techUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'moreInfo',
      type: 'array',
      title: 'More Info',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'images',
      title: 'additional Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})
