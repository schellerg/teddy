import { clsx } from 'clsx'

export type IconVariantType = 'add' | 'edit' | 'delete' | 'menu'

interface IconProps {
  variant: IconVariantType
}

const iconVariants = {
  add: `bg-[url(/icons/icon-add.png)]`,
  edit: 'bg-[url(/icons/icon-pencil.png)]',
  delete: 'bg-[url(/icons/icon-trash.png)]',
  menu: 'bg-[url(/icons/icon-add.png)]',
}

const Icon = ({ variant = 'add' }: IconProps) => {
  return (
    <span className={clsx('inline-flex w-[25px] h-[25px] bg-contain', iconVariants[variant])}></span>
  )
}

export default Icon