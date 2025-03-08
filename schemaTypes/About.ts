export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      title: 'Resume',
      name: 'resume',
      type: 'file',
    },
    {
      title: 'Author Image',
      name: 'authorImg',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
}
