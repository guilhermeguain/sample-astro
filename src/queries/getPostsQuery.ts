export const getPostsQuery = `
  query {
    posts {
      data {
        id
        attributes {
          title
          slug
          metaDescription
          featuredImage {
            data {
              id 
              attributes {
                alternativeText
                caption
                width
                height
                url
              }
            }
          }
          content
          createdAt
          updatedAt
        }
      }
    }
  }
`;
