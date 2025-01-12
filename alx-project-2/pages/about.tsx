import type { NextPage } from 'next';
import Button from '../components/common/Button';

const About: NextPage = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <Button size="small" shape="rounded-sm" onClick={handleClick}>
        Small Button
      </Button>
      <Button size="medium" shape="rounded-md" onClick={handleClick}>
        Medium Button
      </Button>
      <Button size="large" shape="rounded-full" onClick={handleClick}>
        Large Button
      </Button>
    </div>
  );
};

export default About;