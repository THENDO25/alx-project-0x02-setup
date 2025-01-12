import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-200 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;