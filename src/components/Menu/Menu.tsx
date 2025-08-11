import { useState } from "react"
import { useLocation } from "react-router-dom"

import clsx from "clsx"

import { CircleArrowLeft } from 'lucide-react'

import type { MenuProps } from "@utils/types"

const Menu: React.FC<MenuProps> = ({ items, isMenuOpen, onClose }) => {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(isMenuOpen)

  const handleClose = () => {
    onClose()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className={clsx('w-full h-full top-0 left-0 opacity-30 bg-black', { 'fixed': isMenuOpen, 'hidden': !isMenuOpen })}
        onClick={() => handleClose()}
      />
      <nav className={clsx('fixed w-[260px] h-lvh top-0 left-0 rounded-tr-2xl bg-white transition z-50', { 'transform translate-x-[-285px]': !isMenuOpen })}>
        <header className='flex flex-col items-center justify-between p-10 rounded-tr-2xl bg-gray-dark backdrop-blur-[32px]'>
          <img className='max-w-[100px]' src='/images/logo-teddy.png' alt='Teddy - Logo menu' />
          <a
            className='absolute flex items-center justify-center w-[45px] h-[45px] rounded-full right-[-22.5px] bottom-[-22.5px] cursor-pointer bg-black'
            title='Recolher menu'
            onClick={() => handleClose()}
          >
            <CircleArrowLeft fill="white" />
          </a>
        </header>

        <ul className='flex flex-col pt-8 pl-5 gap-5'>
          {
            items.map((item) => {
              return (
                <li key={item.label} className='flex'>
                  <a className={clsx(
                    'flex items-center font-medium text-base cursor-pointer hover:text-orange',
                    { 'text-orange': item.href && location.pathname === item.href },
                  )}
                    title={item.label} onClick={item.onClick}>
                    {item.Icon && <item.Icon size={20} />}
                    <span className={clsx({ 'ml-2': item.Icon })}>{item.label}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Menu