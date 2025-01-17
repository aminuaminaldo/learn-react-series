import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/Container/Container";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div w-full py-8>
        <Container>
          <div className="flex flex-wrap">
            <h1>Login to read all posts</h1>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div w-full py-8>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => {
            return <PostCard key={post.$id} {...post} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
