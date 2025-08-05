import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: React.ReactElement<LucideIcon>
  iconPosition?: 'left' | 'right'
  variant?: 'outline' | 'filled'
  onClick?: () => void
}

const variantMapping = {
  outline: 'bg-transparent border-2 text-orange border-orange',
  filled: 'bg-orange text-white hover:bg-black',
  icon: 'bg-transparent p-0!'
}

const Button: React.FC<ButtonProps> = ({ icon, iconPosition = 'left', label, variant = 'outline', onClick, ...rest }) => {
  const iconStyle = variantMapping[!label && icon ? 'icon' : variant]
  const iconIsRight = iconPosition === 'right'

  return (
    <button className={clsx(
      'flex items-center justify-center p-1.5 text-bold rounded-sm cursor-pointer',
      iconStyle,
      iconIsRight ? 'flex-row-reverse' : 'flex-row',
    )}
      onClick={onClick} {...rest}>
      {icon && icon}
      {label && <span className={clsx(iconIsRight ? 'mr-2' : 'ml-2')}>{label}</span>}
    </button >
  )
}

export default Button