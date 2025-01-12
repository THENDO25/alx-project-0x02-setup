import type { NextPage } from 'next';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
      ))}
    </div>
  );
};

export default Posts;