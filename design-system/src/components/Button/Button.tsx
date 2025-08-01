import clsx from 'clsx'
import type { IconVariantType } from 'components/Icon/Icon'
import Icon from 'components/Icon/Icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: IconVariantType
  iconPosition?: 'left' | 'right'
  variant?: 'outline' | 'filled'
  onClick?: () => void
}

const variantMapping = {
  outline: 'bg-transparent border-2 text-orange border-orange',
  filled: 'bg-orange text-white',
  icon: 'bg-transparent p-0!'
}

const Button = ({ icon, iconPosition = 'left', label, variant = 'outline', onClick, ...rest }: ButtonProps) => {
  const iconStyle = variantMapping[!label && icon ? 'icon' : variant]
  const iconIsRight = iconPosition === 'right'
  const iconPositionClass = iconIsRight ? 'flex-row-reverse' : 'flex-row'
  const iconMargin = !label && iconIsRight ? 'mr-2' : 'ml-2'

  return (
    <button className={clsx('flex p-1.5 text-bold text-center rounded-sm cursor-pointer', iconStyle, iconPositionClass)} onClick={onClick} {...rest}>
      {icon && <Icon variant={icon} />}
      {label && <span className={iconMargin}>{label}</span>}
    </button>
  )
}

export default Button