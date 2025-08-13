import { useDeleteClient } from "@hooks"
import type { Client } from "@utils/types"
import { Button } from "@components"

type Props = {
  client: Client
  onClose: () => void
  refetch: () => Promise<void>
}

const DeleteModal = ({ client, onClose, refetch }: Props) => {
  const { deleteClient, loading } = useDeleteClient()

  const onSubmit = async () => {
    if (client.id) {
      await deleteClient(client.id)
      refetch()
      onClose()
    }
  }

  return (
    <>
      <p className="text-left">
        Você está prestes a excluir o cliente:{" "}
        <span className="font-bold">{client.name}</span>
      </p>
      <Button disabled={loading} fullWidth label="Excluir cliente" variant="filled" onClick={onSubmit} />
    </>)
}

export default DeleteModal