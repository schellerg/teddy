import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  label?: string
  icon?: React.ReactElement<LucideIcon>
  iconPosition?: 'left' | 'right'
  size?: 'medium' | 'large'
  variant?: 'outline' | 'filled'
  onClick?: () => void
}

const variantMapping = {
  outline: 'bg-transparent border-2 text-orange border-orange hover:text-black hover:border-black',
  filled: 'bg-orange text-white hover:bg-black',
  icon: 'bg-transparent p-0!'
}

const Button: React.FC<ButtonProps> = ({ fullWidth = false, icon, iconPosition = 'left', label, size = 'medium', variant = 'outline', onClick, ...rest }) => {
  const iconStyle = variantMapping[!label && icon ? 'icon' : variant]
  const iconIsRight = iconPosition === 'right'

  return (
    <button className={clsx(
      'flex items-center justify-center text-bold rounded-sm cursor-pointer',
      fullWidth && 'w-full',
      iconStyle,
      {
        'flex-row': !iconIsRight,
        'flex-row-reverse': iconIsRight,
        'p-1.5': size === 'medium',
        'p-3 text-2xl': size === 'large',
      }
    )}
      onClick={onClick} {...rest}>
      {icon && icon}
      {label && <span className={clsx(
        {
          'ml-2': label && icon && !iconIsRight,
          'mr-2': label && icon && iconIsRight
        }
      )}>
        {label}
      </span>}
    </button >
  )
}

export default Button