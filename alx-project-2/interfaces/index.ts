interface CardProps {
    title: string;
    content: string;
  }
  
  export type { CardProps };
  interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick: () => void;
  }

  interface PostProps {
    title: string;
    content: string;
    userId: number;
  }
  interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }
  
  export { ButtonProps };