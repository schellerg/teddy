import './index.css'
import { Card, Input, Navigation } from 'components'

function App() {
  return (
    <>
      <div className='grid grid-cols-4 gap-4 p-4'>
        <Card clientName="Rhys Strongfork" clientWage={30000} companyValue={15000000} />
        <Card clientName="Handsome Jack" clientWage={75000} companyValue={55000000} />
        <Card clientName="Katagawa Jr" clientWage={50000} companyValue={35000000} />
        <Card clientName="Typhon DeLeon" clientWage={10000} companyValue={500000} />
      </div>

      <div className='flex justify-center w-3xs my-4 mx-auto'>
        <Input name='name' id='userName' inputSize='large' placeholder='Digite seu nome' required />
      </div>

      <div className='flex justify-center m-4'>
        <Navigation items={
          [
            { label: 'Clientes', onClick: () => alert('Home Clicked!') },
            { label: 'Clientes selecionados', onClick: () => alert('Sobre Clicked!') },
            { label: 'Sair', onClick: () => alert('Contato Clicked!') }
          ]
        } />
      </div>
    </>
  )
}

export default App
