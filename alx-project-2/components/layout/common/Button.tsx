import type { ButtonProps } from '../interfaces';

const Button = ({ size, shape, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`${size === 'small' ? 'px-2 py-1' : size === 'medium' ? 'px-4 py-2' : 'px-6 py-3'} 
                 ${shape} 
                 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;