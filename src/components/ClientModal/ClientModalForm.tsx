import type React from "react"

import { ClientModalFormType } from "@utils/types"
import type { ClientModalFormProps } from "@utils/types"

import { Button, Input } from "@components"

const ClientModalForm: React.FC<ClientModalFormProps> = ({ formType, formData, handleChange }) => {
  const defaultText = formType === ClientModalFormType.CREATE ? "Criar" : "Editar"

  return (
    <form className='flex flex-col w-full gap-3' method="POST">
      <Input
        error={formData.clientName.error}
        name='clientName'
        id='clientName'
        maxLength={50}
        placeholder='Digite o nome:'
        required
        value={formData.clientName.value}
        onChange={handleChange}
      />
      <Input
        error={formData.clientWage.error}
        name='clientWage'
        id='clientWage'
        maxLength={14}
        placeholder='Digite o salário:'
        required type='tel'
        value={formData.clientWage.value}
        onChange={handleChange}
      />
      <Input
        error={formData.companyValue.error}
        name='companyValue'
        id='companyValue'
        maxLength={14}
        placeholder='Digite o valor da empresa:'
        required
        type='tel'
        value={formData.companyValue.value}
        onChange={handleChange}
      />
      <Button label={`${defaultText} cliente`} variant='filled' />
    </form>
  )
}

export default ClientModalForm