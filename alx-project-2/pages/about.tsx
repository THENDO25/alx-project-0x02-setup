import type { NextPage } from 'next';
import Header from '../components/layout/Header';

const About: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
    </div>
  );
};

export default About;