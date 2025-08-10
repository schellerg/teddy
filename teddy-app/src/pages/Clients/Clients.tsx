import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useClients } from "@hooks"

import { Button, ClientModal, ClientsList, Container, Header, Pagination } from "@components"
import { ClientModalFormType } from "@utils/types"

const Clients = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageParam = searchParams.get("page")

  const pageOffset = [16, 32, 64]

  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const [clientModalType, setClientModalType] = useState<ClientModalFormType>(ClientModalFormType.CREATE)

  const [currentPage, setCurrentPage] = useState<number>(parseInt(pageParam || "") || 1)
  const [limit, setLimit] = useState<number>(pageOffset[0])

  const listParams = useMemo(() => ({ page: currentPage, limit }), [currentPage, limit])

  const { users, totalPages, loading, error } = useClients(listParams)

  const onPageChange = (page: number) => {
    return setSearchParams(`page=${page}`)
  }

  useEffect(() => {
    if (pageParam)
      setCurrentPage(parseInt(pageParam))
  }, [searchParams, pageParam])

  return (
    <>
      <Header />

      <Container className="flex-col mt-8">
        <>
          <div className="flex flex-wrap justify-between w-full text-sm lg:text-[18px]">
            <p><span className="font-bold">{users.length}</span> clientes encontrados:</p>
            <form>
              <label className="cursor-pointer" htmlFor="page-offset">Clientes por página:</label>
              <select
                className="cursor-pointer"
                id="page-offset"
                name="page-offset"
                value={limit}
                onChange={(e) => setLimit(parseInt(e.target.value))}
              >
                {pageOffset.map(item => <option>{item}</option>)}
              </select>
            </form>
          </div>

          <ClientsList items={users} loading={loading} error={error} />

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
            currentPage={currentPage}
            onPageChange={onPageChange}
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