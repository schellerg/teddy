import { useContext } from "react"

import { Button, ClientsList, Container, Header } from "@components"
import { type SelectedClientsContextType } from "@utils/types"
import { SelectedClientsContext } from "@contexts/SelectedClientsContext"

const SelectedClients = () => {
  const { clients, removeClient, clearClients } = useContext(SelectedClientsContext) as SelectedClientsContextType

  return (
    <>
      <Header />

      <Container className="flex-col mt-8">
        <>
          <h1 className="flex flex-wrap w-full text-sm lg:text-[18px]">
            Clientes selecionados:
          </h1>

          <ClientsList items={clients} loading={false} error={null} />

          {clients.length > 1 &&
            <Button
              fullWidth
              label="Limpar clientes selecionados"
              onClick={clearClients}
            />
          }
        </>
      </Container>
    </>
  )
}

export default SelectedClients