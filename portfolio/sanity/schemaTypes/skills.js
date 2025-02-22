import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      description: 'Ex: JavaScript, React, Node.js',
    }),
    defineField({
      name: 'level',
      title: 'Skill Level',
      type: 'number',
      description: 'A value from 0 to 100.',
    }),
  ],
})
