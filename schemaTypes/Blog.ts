export default {
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title', // Auto-generate from the title
        maxLength: 200,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'metaDesc',
      type: 'string',
      title: 'Meta Description',
    },

    {
      title: 'Blog Image',
      name: 'blogImg',
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
    {
      name: 'content',
      title: 'Blog Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                          be they blind, color-blind, low-sighted; 
                          alternative text is of great help for those 
                          people that can rely on it to have a good idea of 
                          what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          type: 'code',
          title: 'Code Block',
          options: {
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'Python', value: 'python' },
              { title: 'Lua', value: 'lua' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'C', value: 'c' },
              { title: 'C++', value: 'cpp' },
              { title: 'C#', value: 'csharp' },
              { title: 'Java', value: 'java' },
              { title: 'Go', value: 'go' },
              { title: 'Rust', value: 'rust' },
              { title: 'Bash', value: 'bash' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'PHP', value: 'php' },
              { title: 'Swift', value: 'swift' },
              { title: 'Kotlin', value: 'kotlin' },
              { title: 'R', value: 'r' },
              { title: 'Ruby', value: 'ruby' },
              { title: 'Perl', value: 'perl' },
              { title: 'Dart', value: 'dart' },
              { title: 'Scala', value: 'scala' },
              { title: 'SQL', value: 'sql' },
              { title: 'GraphQL', value: 'graphql' },
              { title: 'Markdown', value: 'markdown' },
              { title: 'Docker', value: 'docker' },
              { title: 'YAML', value: 'yaml' },
              { title: 'JSON', value: 'json' },
            ],
            language: 'javascript', // Default language
            withFilename: true, // Enable filename if needed
          },
        },
      ],
    },
    {
      name: 'estimatedRead',
      title: 'Estimated Read',
      type: 'string',
    },
    {
      name: 'isFeaturedBlog',
      title: 'Featured Blog',
      type: 'boolean',
    },

    {
      title: 'Publish date',
      name: 'publishDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
