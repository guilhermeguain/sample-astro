export type PostProps = {
  id: number;
  attributes: PostAttributesProps;
};

export type PostAttributesProps = {
  slug: string;
  title: string;
  metaDescription: string;
  featuredImage: PostAttributesFeaturedImageProps;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type PostAttributesFeaturedImageProps = {
  data: {
    id: string;
    attributes: {
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      url: string;
    };
  };
};

export type GetPostsGraphQlProps = {
  posts: {
    data: PostProps[];
  };
};
