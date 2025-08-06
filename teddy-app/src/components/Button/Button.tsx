import clsx from 'clsx'

import type { ButtonProps } from '@utils/types'

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
      'flex items-center justify-center font-bold rounded-sm cursor-pointer',
      fullWidth && 'w-full',
      iconStyle,
      {
        'flex-row': !iconIsRight,
        'flex-row-reverse': iconIsRight,
        'p-1.5': size === 'medium',
        'p-3.5 text-2xl': size === 'large',
      }
    )}
      onClick={onClick} {...rest}>
      {
        icon && <span className={clsx(
          {
            'ml-2': label && icon && !iconIsRight,
            'mr-2': label && icon && iconIsRight
          }
        )}>
          {icon}
        </span>
      }
      {label && label}
    </button >
  )
}

export default Button