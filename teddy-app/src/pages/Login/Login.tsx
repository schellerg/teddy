import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import { Button, Input } from "@components"

function Login() {
  const router = useNavigate()
  const [userName, setUserName] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    const currentUser = localStorage.getItem("username")

    if (currentUser?.length)
      router("/clientes")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (!userName.length) {
      setError(true)
      setErrorMessage("Preencha o nome")
      return
    }

    localStorage.setItem("username", userName)
    return router("/clientes")
  }

  return (
    <main className="flex min-h-full items-center justify-center">
      <form className="flex flex-col w-full sm:w-[520px] gap-4" action="#" method="POST">
        <h1 className="text-4xl font-normal text-center">Olá, seja bem-vindo!</h1>
        <Input
          error={error}
          id="userName"
          inputSize="large"
          maxLength={50}
          name="userName"
          placeholder="Digite o seu nome:"
          helperText={errorMessage}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button fullWidth label="Entrar" size="large" variant="filled" onClick={onSubmit} />
      </form>
    </main>
  )
}

export default Login
