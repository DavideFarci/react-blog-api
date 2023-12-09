import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const data = await (await fetch("http://localhost:5174/posts")).json();
    setPosts(data.data);
  }

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold py-8">Posts List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostsList;
