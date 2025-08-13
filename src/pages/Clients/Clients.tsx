import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { SelectedClientsContext } from "@contexts"
import { ClientModalFormType, type Client, type SelectedClientsContextType } from "@utils/types"

import { useClients } from "@hooks"

import { Button, ClientModal, ClientsList, Container, Header, Pagination } from "@components"
import { Plus, Pencil, Trash2 } from "lucide-react"

const Clients = () => {
  /* TODO: abstract statements below to hooks */
  const [searchParams, setSearchParams] = useSearchParams()
  const pageParam = searchParams.get("page")

  const iconSize = 18
  const pageOffset = [16, 32, 64]

  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const [clientModalType, setClientModalType] = useState<ClientModalFormType>(ClientModalFormType.CREATE)

  const [currentPage, setCurrentPage] = useState<number>(parseInt(pageParam || "") || 1)
  const [limit, setLimit] = useState<number>(pageOffset[0])

  const { users, totalPages, loading, error, refetch } = useClients({ page: currentPage, limit })
  const { addSelectedClient } = useContext(SelectedClientsContext) as SelectedClientsContextType

  const [currentUser, setCurrentUser] = useState<Client>()

  const handleModal = (type: ClientModalFormType, user?: Client) => {
    setOpenClientModal(true)
    setClientModalType(type)
    if (user)
      setCurrentUser(user)
  }

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
                {pageOffset.map(item => <option key={`page-offset-${item}`}>{item}</option>)}
              </select>
            </form>
          </div>

          <ClientsList
            items={users}
            loading={loading}
            error={error}
            renderActions={(user: Client) => [
              <Button icon={<Plus size={iconSize} />} onClick={() => addSelectedClient(user)} />,
              <Button icon={<Pencil size={iconSize} />} onClick={() => handleModal(ClientModalFormType.EDIT, user)} />,
              <Button icon={<Trash2 color='#ec6724' size={iconSize} />} onClick={() => handleModal(ClientModalFormType.DELETE, user)} />,
            ]}
          />

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
            client={currentUser}
            refetch={refetch}
          />
        </>
      </Container>
    </>
  )
}

export default Clients