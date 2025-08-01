declare module 'ds/components' {
  type IconVariantType = 'add' | 'edit' | 'delete' | 'menu'

  const Button: React.FC<{
    icon?: IconVariantType;
    onClick: () => void;
  }>;

  const Card: React.FC<{
    clientName: string;
    clientWage: number;
    companyValue: number;
  }>;

  const Icon: React.FC<{
    variant: IconVariantType;
  }>;

  export { Button, Card, Icon };
}