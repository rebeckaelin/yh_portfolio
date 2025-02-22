import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Ex: About',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Ex: My Background',
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'text',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description about yourself.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'caption', title: 'Caption', type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'interests',
      title: 'Interests',
      type: 'array',
      of: [{type: 'string'}],
      description: 'A list of interests.',
    }),
  ],
})
