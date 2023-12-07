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
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={slug} />
      <p>{content}</p>
      <div>{category?.name}</div>
      <div>
        Tags:
        {tags.map((tag, i) => {
          return <span key={i}>{tag.name}</span>;
        })}
      </div>
      <div>
        Creato: <span>{createdAt.slice(0, 10)}</span>
      </div>
      <div>
        Ultima modifica: <span>{updatedAt.slice(0, 10)}</span>
      </div>
    </div>
  );
};

export default Post;
