import React, { useState } from "react"

import { Card, ClientModal } from "@components"
import { ClientModalFormType, type ClientsList } from "@utils/types"

const ClientsList: React.FC<ClientsList> = ({ items }) => {
  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const clientModalType = ClientModalFormType.CREATE

  console.log('items', items)

  if (!items?.length)
    return <p className="text-center">Nenhum resultado.</p>

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 mt-3 mb-5">
        {
          items.map(
            item => <Card key={item.id} clientName={item.name} clientWage={item.salary} companyValue={item.companyEvaluation} />
          )
        }
      </ul>

      <ClientModal
        isOpen={openClientModal}
        setIsOpen={setOpenClientModal}
        formType={clientModalType}
      />
    </>
  )
}

export default ClientsList