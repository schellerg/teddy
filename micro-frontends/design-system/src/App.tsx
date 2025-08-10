import './index.css'

import React, { useState } from 'react'

import { Home, Menu as MenuIcon, User, UserStar } from 'lucide-react'
import { Button, Card, Input, Menu, Modal, Navigation, Pagination } from 'components'

/* Design System component - only for demo */
const DSTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className='w-full font-bold text-center'>{children}</h2>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className='relative w-full'>
      <div className='max-w-7xl mx-auto'>
        <Menu
          isMenuOpen={menuOpen}
          currentPage='/'
          items={[
            { label: 'Home', href: '/', Icon: Home, onClick: () => alert('Home Clicked!') },
            { label: 'Clientes', href: '/clientes', Icon: User, onClick: () => alert('Sobre Clicked!') },
            { label: 'Clientes selecionados', href: '/clientes-selecionados', Icon: UserStar, onClick: () => alert('Contato Clicked!') },
          ]}
          onClose={() => setMenuOpen(false)}
        />

        <Modal
          isOpen={modalOpen}
          title='Criar cliente:'
          onClose={() => setModalOpen(false)}>
          <div className="flex w-[360px] max-w-full">
            <form className='flex flex-col w-full gap-3'>
              <Input name='newClientName' id='newClientName' placeholder='Digite o nome:' required />
              <Input name='newClientWage' id='newClientWage' placeholder='Digite o salário:' required type='tel' />
              <Input name='newCompanyValue' id='newCompanyValue' placeholder='Digite o valor da empresa:' required type='tel' />
              <Button label='Criar cliente' variant='filled' />
            </form>
          </div>
        </Modal>

        <div className='flex flex-wrap items-center justify-center gap-2 my-4 mx-auto'>
          <DSTitle>Inputs</DSTitle>
          <Input name='input-default' id='input-default' placeholder='Default (medium)' required />
          <Input name='input-large' id='input-large' inputSize='large' placeholder='Large' required />
        </div>

        <div className='flex flex-wrap justify-center gap-3 my-12'>
          <DSTitle>Buttons</DSTitle>
          <Button label='Outlined' onClick={() => { }} />
          <Button label='Filled' variant='filled' onClick={() => { }} />
          <Button label='Left icon (default)' icon={<User />} onClick={() => { }} />
          <Button label='Right icon' variant='filled' icon={<User />} iconPosition='right' onClick={() => { }} />
          <span className='self-center'>Icon only: </span>
          <Button icon={<User />} onClick={() => { }} />
          <Button label='Full Width' fullWidth onClick={() => { }} />
        </div>

        <div className='flex flex-wrap items-center justify-evenly gap-3 my-12'>
          <DSTitle>Menu, Navigation, and Modal</DSTitle>
          <Button label='Click me' icon={<MenuIcon />} onClick={() => setMenuOpen(true)} />

          <Navigation
            items={
              [
                { label: 'Clientes', href: '/clientes', onClick: () => alert('Home Clicked!') },
                { label: 'Clientes selecionados', href: '/clientes-selecionados', onClick: () => alert('Sobre Clicked!') },
                { label: 'Sair', href: '/', onClick: () => alert('Contato Clicked!') }
              ]
            } />

          <Button label='Open modal' onClick={() => setModalOpen(true)} />
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3 my-12'>
          <DSTitle>Card</DSTitle>
          <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            <Card clientName="Rhys Strongfork" clientWage={30000} companyValue={15000000} />
            <Card clientName="Handsome Jack" clientWage={75000} companyValue={55000000} />
            <Card clientName="Katagawa Jr" clientWage={50000} companyValue={35000000} />
            <Card clientName="Typhon DeLeon" clientWage={10000} companyValue={500000} />
          </div>
        </div>

        <div className='flex flex-wrap justify-center my-8 gap-3'>
          <DSTitle>Pagination</DSTitle>
          <Pagination
            totalPages={12}
            currentPage={4}
            onPageChange={(page) => alert(`Page changed to ${page}`)}
          />
        </div>
      </div>
    </main>
  )
}

export default App
