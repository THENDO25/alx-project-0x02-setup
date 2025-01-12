import type { NextPage } from 'next';
import { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Create a new post
      </button>
      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddPost={handleAddPost}
      />
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Home;