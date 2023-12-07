const Post = ({ post }) => {
  const {
    title,
    slug,
    image,
    content,
    published,
    category,
    createdAt,
    updatedAt,
    tags,
  } = post;

  return (
    <div className="card border p-3">
      <h3 className="font-bold text-2xl text-center">{title}</h3>
      <img className="w-full" src={image} alt={slug} />
      <p className="text-sm mb-3">{content}</p>
      <div className="mb-2">
        <span className="font-bold">Category: </span>
        {category?.name}
      </div>
      <div className="mb-2">
        <span className="font-bold">Tags: </span>
        {tags.map((tag, i) => {
          return (
            <span className="mr-2" key={i}>
              {tag.name}
            </span>
          );
        })}
      </div>
      <div className="mb-2">
        <span className="font-bold">Creato: </span>
        {createdAt.slice(0, 10)}
      </div>
      <div className="mb-2">
        <span className="font-bold">Ultima modifica: </span>
        {updatedAt.slice(0, 10)}
      </div>
    </div>
  );
};

export default Post;
