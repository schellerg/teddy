import { clsx } from 'clsx'
import type React from 'react'

export type IconVariantType = 'add' | 'close' | 'edit' | 'delete' | 'menu'

interface IconProps {
  variant: IconVariantType
  onClick?: () => void
}

const iconVariants = {
  add: `bg-[url(/icons/icon-add.png)]`,
  close: 'bg-[url(/icons/icon-close.png)]',
  delete: 'bg-[url(/icons/icon-trash.png)]',
  edit: 'bg-[url(/icons/icon-pencil.png)]',
  menu: 'bg-[url(/icons/icon-add.png)]',
}

const Icon: React.FC<IconProps> = ({ variant = 'add', onClick }) => {
  const Tag: React.ElementType = onClick ? 'button' : 'span'

  return (
    <Tag
      className={
        clsx(
          'inline-flex w-[25px] h-[25px] bg-contain',
          iconVariants[variant],
          { 'cursor-pointer': onClick },
        )
      }
      onClick={onClick}
    />
  )
}

export default Icon