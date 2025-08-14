import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { useClients } from "@hooks"
import { offsetOptions, PaginationContext, SelectedClientsContext } from "@contexts"
import { ClientModalFormType, type Client, type SelectedClientsContextType } from "@utils/types"

import { Button, ClientModal, ClientsList, Container, Header, Pagination } from "@components"
import { Plus, Pencil, Trash2 } from "lucide-react"


const Clients = () => {
  // TODO: abstract statements below to hooks
  const [searchParams, setSearchParams] = useSearchParams()
  const pageParam = searchParams.get("page")

  const iconSize = 18

  // TODO Create context/provider to control modals
  const [openClientModal, setOpenClientModal] = useState<boolean>(false)
  const [clientModalType, setClientModalType] = useState<ClientModalFormType>(ClientModalFormType.CREATE)

  const { addSelectedClient } = useContext(SelectedClientsContext) as SelectedClientsContextType
  const { page, setPage, limit, setLimit } = useContext(PaginationContext)
  const { users, totalPages, loading, error, refetch } = useClients({ page, limit })

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
      setPage(parseInt(pageParam))
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
                onChange={(e) => {
                  setLimit(parseInt(e.target.value))
                  setSearchParams("?page=1")
                }}
              >
                {offsetOptions.map(item => <option key={`page-offset-${item}`}>{item}</option>)}
              </select>
            </form>
          </div>

          <ClientsList
            items={users}
            loading={loading}
            error={error}
            renderActions={(user: Client) => [
              <Button key={`select-client-${user.id}`} icon={<Plus size={iconSize} />} onClick={() => addSelectedClient(user)} />,
              <Button key={`edit-client-${user.id}`} icon={<Pencil size={iconSize} />} onClick={() => handleModal(ClientModalFormType.EDIT, user)} />,
              <Button key={`delete-client-${user.id}`} icon={<Trash2 color='#ec6724' size={iconSize} />} onClick={() => handleModal(ClientModalFormType.DELETE, user)} />,
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
            currentPage={page}
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