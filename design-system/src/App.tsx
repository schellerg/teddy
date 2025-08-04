import './index.css'

import { useState } from 'react'
import { Button, Card, Input, Modal, Navigation, Pagination } from 'components'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        <Card clientName="Rhys Strongfork" clientWage={30000} companyValue={15000000} />
        <Card clientName="Handsome Jack" clientWage={75000} companyValue={55000000} />
        <Card clientName="Katagawa Jr" clientWage={50000} companyValue={35000000} />
        <Card clientName="Typhon DeLeon" clientWage={10000} companyValue={500000} />
      </div>

      <div className='flex justify-center w-3xs my-4 mx-auto'>
        <Input name='name' id='userName' inputSize='large' placeholder='Digite seu nome' required />
      </div>

      <div className='flex justify-center m-4'>
        <Navigation
          items={
            [
              { label: 'Clientes', href: '/clientes', onClick: () => alert('Home Clicked!') },
              { label: 'Clientes selecionados', href: '/clientes-selecionados', onClick: () => alert('Sobre Clicked!') },
              { label: 'Sair', href: '/', onClick: () => alert('Contato Clicked!') }
            ]
          } />
      </div>

      <div className='flex justify-center m-4'>
        <Pagination
          totalPages={12}
          currentPage={4}
          onPageChange={(page) => alert(`Page changed to ${page}`)}
        />
      </div>

      <div className='flex justify-center m-4'>
        <Button label='Open modal' variant='filled' onClick={() => setModalOpen(true)} />
      </div>

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
    </>
  )
}

export default App
