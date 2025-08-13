import React from "react"

import { ClientModalFormType } from "@utils/types"
import type { ClientModalProps } from "@utils/types"

import { Modal } from "@components"
import FormCreate from "./FormCreate"
import FormEdit from "./FormEdit"
import DeleteModal from "./DeleteModal"

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, setIsOpen, formType, client, refetch }) => {
  const defaultText = `${formType === ClientModalFormType.CREATE ?
    "Criar" : formType === ClientModalFormType.EDIT ?
      "Editar" : "Excluir"} cliente`

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      title={defaultText}
      onClose={() => handleClose()}>
      <div className="flex w-[360px] flex-col max-w-full gap-4">
        {formType === ClientModalFormType.DELETE && client &&
          <DeleteModal client={client} onClose={handleClose} refetch={refetch} />
        }
        {formType === ClientModalFormType.CREATE &&
          <FormCreate onClose={handleClose} refetch={refetch} />
        }
        {formType === ClientModalFormType.EDIT && client &&
          <FormEdit client={client} onClose={handleClose} refetch={refetch} />
        }
      </div>
    </Modal>
  )
}

export default ClientModal