import type { ApiUser, Client, ClientModalFormData } from "@utils/types"

import useClients from "@hooks/useClients"
import useEditClient from "@hooks/useEditClient"
import useGetClient from "@hooks/useGetClient"

import Form from "./Form"

type Props = {
  client: Client
  onClose: () => void
}

const FormEdit = ({ client, onClose }: Props) => {
  const { client: clientData, loading, error } = useGetClient(client.id)
  const { updateClient, loading: updateLoading, error: updateError } = useEditClient()
  // const { refetch } = useClients({ page: 1, limit: 16 }) // move this to context

  const parsedClientData = clientData ? {
    name: clientData.name,
    salary: clientData.salary.toString(),
    companyValuation: clientData.companyValuation.toString()
  } : undefined

  const onSubmit = async (data: ClientModalFormData) => {
    const formatData = {
      id: client.id,
      name: data.name,
      salary: parseInt(data.salary),
      companyValuation: parseInt(data.companyValuation)
    } as ApiUser

    await updateClient(formatData)
    onClose()
    // refetch()
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return <Form title="Editar cliente" client={parsedClientData} loading={updateLoading} onSubmit={onSubmit} />
}

export default FormEdit