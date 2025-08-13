import type { Client } from "@utils/types"
import useDeleteClient from "@hooks/useDeleteClient"
import { Button } from "@components"

type Props = {
  client: Client
  onClose: () => void
}

const DeleteModal = ({ client, onClose }: Props) => {
  const { deleteClient, loading } = useDeleteClient()

  const onSubmit = async () => {
    await deleteClient(client.id)
    onClose()
  }

  return (
    <>
      <p className="text-left">
        Você está prestes a excluir o cliente:{" "}
        <span className="font-bold">{client.name}</span>
      </p>
      <Button fullWidth label="Excluir cliente" loading={loading} variant="filled" onClick={onSubmit} />
    </>)
}

export default DeleteModal