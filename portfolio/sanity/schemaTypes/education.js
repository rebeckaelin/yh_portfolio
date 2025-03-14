import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Ex: Fullstack Web Development',
    }),
    defineField({
      name: 'school',
      title: 'School / Institution',
      type: 'string',
      description: 'Ex: KTH, Chalmers, Hyper Island',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Ex: Stockholm, Sweden',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
  ],
})
