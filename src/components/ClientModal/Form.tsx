import type React from "react"
import { useForm } from "react-hook-form"

import type { ClientModalFormData, ClientModalFormProps } from "@utils/types"

import { Button, Input } from "@components"

const Form: React.FC<ClientModalFormProps> = ({ title, client, loading, onSubmit }) => {
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
    }
  })

  const submitHandler = (data: ClientModalFormData) => {
    onSubmit(data)
    reset()
  }

  return (
    <form className="flex flex-col w-full gap-3" method="POST">
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

      <Button
        disabled={loading}
        label={!loading ? title : 'Salvando...'}
        variant="filled"
        onClick={handleSubmit(submitHandler)}
      />
    </form>
  )
}

export default Form