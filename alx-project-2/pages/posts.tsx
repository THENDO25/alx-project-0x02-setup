import type { NextPage } from 'next';
import Header from '../components/layout/Header';

const Posts: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
    </div>
  );
};

export default Posts;