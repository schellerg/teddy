import type React from "react";

declare module 'ds/components' {
  const Button: React.FC<{
    label?: string
    icon?: React.ReactElement<LucideIcon>
    iconPosition?: 'left' | 'right'
    variant?: 'outline' | 'filled'
    onClick?: () => void
  }>;

  const Card: React.FC<{
    clientName: string;
    clientWage: number;
    companyValue: number;
  }>;

  const Input: React.FC<{
    error?: boolean
    helperText?: string
    inputSize?: 'medium' | 'large'
  }>;

  export { Button, Card, Input };
}