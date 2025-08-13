import type { ApiUser, Client, ClientModalFormData } from "@utils/types"
import { useEditClient, useGetClient } from "@hooks"

import Form from "./Form"

type Props = {
  client: Client
  onClose: () => void
  refetch: () => Promise<void>
}

const FormEdit = ({ client, onClose, refetch }: Props) => {
  const { client: clientData, loading, error: getClientError } = useGetClient(client.id)
  const { updateClient, loading: updateLoading, error: updateError } = useEditClient()

  const onSubmit = async (data: ClientModalFormData) => {
    const formatData = {
      id: client.id,
      name: data.name,
      salary: data.salary,
      companyValuation: data.companyValuation
    } as ApiUser

    await updateClient(formatData)
    refetch()
    onClose()
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return <Form title="Editar cliente" client={clientData} loading={updateLoading} error={getClientError || updateError} onSubmit={onSubmit} />
}

export default FormEdit