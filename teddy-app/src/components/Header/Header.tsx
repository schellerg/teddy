import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Home, MenuIcon, User, UserStar } from "lucide-react"

import { Button, Container, Menu, Navigation } from "@components"

const Header = () => {
  const [openMenu, setMenuOpen] = useState<boolean>(false)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const username = localStorage.getItem("username")

  const logout = () => {
    localStorage.removeItem("username")
    navigate("/")
  }

  const navItems = [
    {
      label: 'Home',
      href: '/',
      Icon: Home,
      onClick: () => navigate('/')
    },
    {
      label: 'Clientes',
      href: '/clientes',
      Icon: User,
      onClick: () => navigate('/clientes')
    },
    {
      label: 'Clientes selecionados',
      href: '/clientes-selecionados',
      Icon: UserStar,
      onClick: () => navigate('/clientes-selecionados')
    },
    {
      label: 'Sair',
      href: '#',
      onClick: () => logout()
    }
  ]

  return (
    <>
      <header className="py-3 sm:py-6 shadow-custom-sm">
        <Container className="lg:justify-between">
          <Button icon={<MenuIcon />} onClick={() => setMenuOpen(true)} />

          <img className="ml-2 w-20 sm:w-24 lg:mr-auto" src="/images/logo-teddy.png" alt="Logo Teddy" />

          <Navigation
            items={navItems.filter(item => item.label !== "Home")}
          />

          {username &&
            <div className="ml-auto text-xs sm:text-base">
              Olá, <span className="font-bold">{username}</span>!
            </div>
          }
        </Container>
      </header>

      <Menu
        isMenuOpen={openMenu}
        currentPage={pathname}
        items={navItems}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}

export default Header