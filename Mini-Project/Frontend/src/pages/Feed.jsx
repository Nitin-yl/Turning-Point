import { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      image:
        "https://images.unsplash.com/photo-1781429235828-55c8c31baf38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "A beautiful sunset over the mountains.",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <section className="feed-section">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <img src={post.image} alt="Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default Feed;
