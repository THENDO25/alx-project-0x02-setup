import type { NextPage } from 'next';
import Card from '../components/common/Card';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Card title="Card 1" content="This is the content of Card 1" />
      <Card title="Card 2" content="This is the content of Card 2" />
      <Card title="Card 3" content="This is the content of Card 3" />
    </div>
    
  );
};

export default Home;