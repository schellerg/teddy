import type React from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { clientFormSchema } from "@utils/schemas"

import type { ClientModalFormData, ClientModalFormProps } from "@utils/types"

import { Button, ErrorMessage, Input } from "@components"

const Form: React.FC<ClientModalFormProps> = ({ title, client, loading, error, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ClientModalFormData>({
    defaultValues: {
      name: client?.name,
      salary: client?.salary,
      companyValuation: client?.companyValuation
    },
    resolver: yupResolver(clientFormSchema)
  })

  const submitHandler = (data: ClientModalFormData) => {
    onSubmit(data)
    if (!client)
      reset()
  }

  return (
    <form className="flex flex-col w-full gap-3" method="POST" data-testid="client-form">
      <Input
        {...register("name", { required: "Campo obrigatório", maxLength: 50 })}
        error={errors.name}
        helperText={errors.name?.message}
        placeholder="Digite o nome:"
      />

      <Input
        {...register("salary", { required: "Campo obrigatório", maxLength: 14 })}
        error={errors.salary}
        helperText={errors.salary?.message}
        placeholder="Digite o salário:"
        type="tel"
      />

      <Input
        {...register("companyValuation", { required: "Campo obrigatório", maxLength: 14 })}
        error={errors.companyValuation}
        helperText={errors.companyValuation?.message}
        placeholder="Digite o valor da empresa:"
        type="tel"
      />

      {error &&
        <ErrorMessage message={error.message} />
      }

      <Button
        disabled={loading}
        label={!loading ? title : 'Salvando...'}
        variant="filled"
        onClick={handleSubmit(submitHandler)}
        data-testid="client-form-submit-button"
      />
    </form>
  )
}

export default Form