export const getPostBySlugQuery = (slug: string) => {
  return `
    query posts($slug:String) {
      posts(filters: {slug: {eq:${slug}}}) {
        data {
          id
          attributes {
            title
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
};
