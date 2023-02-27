export const getAllPosts = () => {
  return `*[_type == "post"]{
    ...,
    categories[]->{_id, slug, title},
    "estimatedReadingTime": length(pt::text(body)) / 5 / 200,
  }`;
};

export const getAllCategories = () => {
  return `*[_type == "category"]`;
};

export const getSinglePost = (slug: string) => {
  return `*[_type == 'post' && slug.current=='${slug}']{
    _id,
    author->{name,image},
    _createdAt,
    _updatedAt,
    excerpt,
    categories[]->{_id, slug, description, title},
    body,
    mainImage,
    slug,
    title,
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    "estimatedReadingTime": length(pt::text(body)) / 5 / 200,
    'comments': *[_type == 'comment' && post._ref == ^._id]{
      _id,
      _createdAt,
      commenterName,
      commenterEmail,
      body,
      post,
      'replys':*[_type == 'reply' && comment._ref == ^._id]
    }
  }`;
};
