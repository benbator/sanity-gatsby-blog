export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e17cd86127a45ae0e941550',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dgf29ssy',
                  apiId: '8e6e99be-5e70-4e92-887d-9614259f694a'
                },
                {
                  buildHookId: '5e17cd871443eea5335d6453',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mfjhdtt3',
                  apiId: 'a691e67c-7866-4a70-b209-640c8ea0d490'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benbator/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mfjhdtt3.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
