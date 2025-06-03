import { useEffect, useState } from "react";

function PostList() {
  interface Post {
    id: number;
    title: string;
    content: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Failed to fetch posts", err));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: "1rem" }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
