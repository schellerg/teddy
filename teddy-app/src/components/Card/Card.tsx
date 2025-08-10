import { useState } from "react"
import type React from "react"

import { formatMoney } from "@utils/formatMoney"

import { Button, ClientModal } from "@components"
import { Plus, Pencil, Trash2 } from "lucide-react"

import { type Client, ClientModalFormType } from "@utils/types"

const Card: React.FC<Client> = ({ name, salary, companyValuation }) => {
  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const [clientModalType, setClientModalType] = useState<ClientModalFormType>(ClientModalFormType.CREATE)

  const handleModal = (type: ClientModalFormType) => {
    setOpenClientModal(true)
    setClientModalType(type)
  }

  const iconSize = 18

  return (
    <li className="text-center p-4 rounded-sm bg-white shadow-custom">
      <h3 className="font-bold text-black">{name}</h3>
      <p className="text-black">Salário: {formatMoney(salary)}</p>
      <p className="text-black">Empresa: {formatMoney(companyValuation)}</p>

      <div className="flex justify-between mt-4">
        <Button icon={<Plus size={iconSize} />} onClick={() => { }} />
        <Button icon={<Pencil size={iconSize} />} onClick={() => handleModal(ClientModalFormType.EDIT)} />
        <Button icon={<Trash2 color='#ec6724' size={iconSize} />} onClick={() => handleModal(ClientModalFormType.DELETE)} />
      </div>

      <ClientModal
        isOpen={openClientModal}
        setIsOpen={setOpenClientModal}
        formType={clientModalType}
      />
    </li>
  )
}

export default Card