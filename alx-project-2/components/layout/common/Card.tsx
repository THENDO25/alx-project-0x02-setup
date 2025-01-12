import type { CardProps } from '../interfaces';

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;