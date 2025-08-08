import React, { useState } from "react"
import { ClientModalFormType } from "@utils/types"
import type { ClientModalFormData, ClientModalProps } from "@utils/types"

import { Button, Modal } from "@components"
import ClientModalForm from "./ClientModalForm"

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, setIsOpen, formType }) => {
  const defaultState = {
    clientName: { error: false, value: '' },
    clientWage: { error: false, value: '' },
    companyValue: { error: false, value: '' },
  }

  const [formData, setFormData] = useState<ClientModalFormData>(defaultState)

  const defaultText = `${formType === ClientModalFormType.CREATE ? "Criar" : formType === ClientModalFormType.EDIT ? "Editar" : "Excluir"} cliente`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { error: false, value }
    }))
  }

  const handleClose = () => {
    setFormData(defaultState)
    setIsOpen(false)
  }

  return (
    <Modal
      // key={`${ClientModalFormType}-${1}`}
      isOpen={isOpen}
      title={defaultText}
      onClose={() => handleClose()}>
      <div className="flex w-[360px] flex-col max-w-full gap-4">
        {formType === ClientModalFormType.DELETE &&
          <>
            <p className="text-left">Você está prestes a excluir o cliente: <span className="font-bold">{formData.clientName.value}</span></p>
            <Button fullWidth label={defaultText} variant="filled" onClick={() => { }} />
          </>
        }
        {formType !== ClientModalFormType.DELETE &&
          <ClientModalForm formType={formType} formData={formData} handleChange={handleChange} />
        }
      </div>
    </Modal>
  )
}

export default ClientModal