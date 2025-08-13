import { useContext } from "react"

import { SelectedClientsContext } from "@contexts"
import type { Client, SelectedClientsContextType } from "@utils/types"

import { Button, ClientsList, Container, Header } from "@components"
import { Minus } from "lucide-react"

const SelectedClients = () => {
  const { selectedClients, removeSelectedClient, clearSelectedClients } = useContext(SelectedClientsContext) as SelectedClientsContextType

  return (
    <>
      <Header />

      <Container className="flex-col mt-8">
        <>
          <h1 className="flex flex-wrap w-full font-bold text-sm lg:text-[22px]">
            Clientes selecionados:
          </h1>

          <ClientsList
            items={selectedClients}
            loading={false}
            error={null}
            renderActions={(client: Client) => [
              <Button icon={<Minus color='#ec6724' size={18} />} onClick={() => removeSelectedClient(client.id)} />
            ]}
          />

          {selectedClients.length > 0 &&
            <Button
              fullWidth
              label="Limpar clientes selecionados"
              onClick={clearSelectedClients}
            />
          }
        </>
      </Container>
    </>
  )
}

export default SelectedClients