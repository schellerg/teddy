import { useNavigate } from 'react-router-dom'

import { Button, Input } from 'ds/components'
import { useState } from 'react'

function App() {
  const router = useNavigate()
  const [userName, setUserName] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onSubmit = () => {
    if (!userName.length) {
      setError(true)
      setErrorMessage('Preencha o nome')
      return
    }

    localStorage.setItem('username', userName)
    router('/clientes')
  }

  return (
    <main className="flex min-h-full justify-center">
      <div className='flex flex-col w-full sm:w-[520px] gap-2'>
        <h1 className='text-4xl font-normal text-center'>Olá, seja bem-vindo!</h1>
        <form method='POST'>
          <Input
            error={error}
            id='userName'
            inputSize='large'
            name='userName'
            placeholder='Digite o seu nome:'
            helperText={errorMessage}
          // required
          />
          <Button fullWidth label='Entrar' size='large' variant='filled' onClick={() => onSubmit} />
        </form>
      </div>
    </main>
  )
}

export default App
