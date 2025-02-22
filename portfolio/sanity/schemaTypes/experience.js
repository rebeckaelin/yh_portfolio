import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Ex: XYZ Corp, ABC Company',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Ex: Software Engineer, Frontend Developer',
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
      description: 'Ex: 2019-2022, 6 months',
    }),
  ],

  preview: {
    select: {
      title: 'company',
      subtitle: 'position',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        ...selection,
        subtitle: subtitle ? `${subtitle} at ${title}` : title,
      }
    },
  },
})
