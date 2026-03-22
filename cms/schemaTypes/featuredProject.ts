import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  // 'name' adalah ID unik untuk database (seperti nama tabel)
  name: 'featuredProjects', 
  // 'title' adalah label yang akan tampil di UI Sanity Studio
  title: 'Featured Projects', 
  // 'document' berarti ini adalah entitas utama yang berdiri sendiri 
  type: 'document', 
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(31),
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(31),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(255),
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      description: 'ex: React, Vite, Tailwind CSS, Sanity',
      of: [defineArrayMember({ type: 'string' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagePortrait',
      title: 'Portrait Image',
      type: 'image',
      description: "only 9:16 aspect ratio",
      options: {
        hotspot: true, // Memungkinkan kamu mengatur fokus crop gambar langsung dari UI
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageLandscape',
      title: 'Landscape Image',
      type: 'image',
      description: "only 16:9 aspect ratio",
      options: {
        hotspot: true, // Memungkinkan kamu mengatur fokus crop gambar langsung dari UI
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    }),
  ],
})