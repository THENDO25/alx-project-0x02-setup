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
  
  export { ButtonProps };