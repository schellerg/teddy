import { useEffect, useState } from "react"

import { Button, Card, ClientModal, Container, Header, Pagination } from "@components"
import { ClientModalFormType } from "@utils/types"

const Clients = () => {
  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const [clientModalType, setClientModalType] = useState<ClientModalFormType>(ClientModalFormType.CREATE)

  return (
    <>
      <Header />

      <Container className="flex-col mt-8">
        <div className="flex justify-between w-full">
          <p><span className="font-bold">16</span> clientes encontrados:</p>
          <form>
            <label className="cursor-pointer" htmlFor="page-offset">Clientes por página:</label>
            <select id="page-offset" name="page-offset">
              <option>16</option>
              <option>32</option>
              <option>64</option>
            </select>
          </form>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 w-full gap-5 mt-3 mb-5">
          {
            [...Array(16).keys()].map(
              key => <Card key={key} clientName='Rhys Strongfork' clientWage={150000} companyValue={20000000} />
            )
          }
        </ul>

        <Button
          fullWidth
          label="Criar cliente"
          onClick={() => {
            setOpenClientModal(true)
            setClientModalType(ClientModalFormType.CREATE)
          }}
        />

        <Pagination
          totalPages={12}
          currentPage={4}
          onPageChange={() => { }}
        />

        <ClientModal
          isOpen={openClientModal}
          setIsOpen={setOpenClientModal}
          formType={clientModalType}
        />
      </Container>
    </>
  )
}

export default Clients