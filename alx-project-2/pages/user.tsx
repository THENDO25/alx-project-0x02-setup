import type { NextPage } from 'next';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';

const Users: NextPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} id={user.id} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  );
};

export default Users;