import React, { useState } from "react"
import { ClientModalFormType } from "@utils/types"
import type { ClientModalFormData, ClientModalProps } from "@utils/types"

import { Button, Input, Modal } from "@components"

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, setIsOpen, formType }) => {
  const [formData, setFormData] = useState<ClientModalFormData>({
    clientName: { error: false, value: '' },
    clientWage: { error: false, value: '' },
    companyValue: { error: false, value: '' },
  })

  const defaultText = formType === ClientModalFormType.CREATE ? "Criar" : "Editar"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { error: false, value }
    }))
  }

  return (
    <Modal
      // key={`${ClientModalFormType}-${1}`}
      isOpen={isOpen}
      title={`${defaultText} cliente`}
      onClose={() => setIsOpen(false)}>
      <div className="flex w-[360px] max-w-full">
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
      </div>
    </Modal>
  )
}

export default ClientModal