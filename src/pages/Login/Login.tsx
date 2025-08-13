import { useEffect } from "react"

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@utils/schemas"

import { Button, Input } from "@components"

type LoginData = {
  username: string
}

function Login() {
  const router = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    defaultValues: {
      username: '',
    },
    resolver: yupResolver(loginSchema),
  })

  useEffect(() => {
    const currentUser = localStorage.getItem("username")

    if (currentUser?.length)
      router("/clientes")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (data: LoginData) => {
    localStorage.setItem("username", data.username)
    return router("/clientes")
  }

  return (
    <main className="flex min-h-full items-center justify-center">
      <form className="flex flex-col w-full sm:w-[520px] gap-4" action="#" method="POST">
        <h1 className="text-4xl font-normal text-center">Olá, seja bem-vindo!</h1>
        <Input
          {...register("username")}
          error={errors.username}
          inputSize="large"
          placeholder="Digite o seu nome:"
          helperText={errors.username?.message}
        />
        <Button fullWidth label="Entrar" size="large" variant="filled" onClick={handleSubmit(onSubmit)} />
      </form>
    </main>
  )
}

export default Login
