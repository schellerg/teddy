import { useEffect, useMemo, useState } from "react"
import { useClients } from "@hooks"

import { Button, ClientModal, ClientsList, Container, ErrorMessage, Header, Pagination } from "@components"
import { ClientModalFormType } from "@utils/types"

const Clients = () => {
  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const [clientModalType, setClientModalType] = useState<ClientModalFormType>(ClientModalFormType.CREATE)

  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(16)

  const params = useMemo(() => ({ page, limit }), [page, limit])

  const { users, totalPages, loading, error } = useClients(params)

  if (!loading && error)
    return <ErrorMessage message={error} />

  if (loading)
    return <p>Carregando...</p>

  return (
    <>
      <Header />

      <Container className="flex-col mt-8">
        <>
          <div className="flex flex-wrap justify-between w-full text-sm lg:text-[18px]">
            <p><span className="font-bold">{users.length}</span> clientes encontrados:</p>
            <form>
              <label className="cursor-pointer" htmlFor="page-offset">Clientes por página:</label>
              <select id="page-offset" name="page-offset">
                <option>16</option>
                <option>32</option>
                <option>64</option>
              </select>
            </form>
          </div>

          <ClientsList items={users} />

          <Button
            fullWidth
            label="Criar cliente"
            onClick={() => {
              setOpenClientModal(true)
              setClientModalType(ClientModalFormType.CREATE)
            }}
          />

          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={() => { }}
          />

          <ClientModal
            isOpen={openClientModal}
            setIsOpen={setOpenClientModal}
            formType={clientModalType}
          />
        </>
      </Container>
    </>
  )
}

export default Clients