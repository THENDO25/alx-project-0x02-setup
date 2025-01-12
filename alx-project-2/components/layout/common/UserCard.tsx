import type { UserProps } from '../interfaces';

const UserCard = ({ id, name, email, address }: UserProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">
        {address.street}, {address.suite}, {address.city} {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;