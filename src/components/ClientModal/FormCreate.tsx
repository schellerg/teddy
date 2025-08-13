import { ClientModalFormType, type ApiUser, type ClientModalFormData } from "@utils/types"

import Form from "./Form"
import useAddClient from "@hooks/useAddClient"
import useClients from "@hooks/useClients"
import { useMemo } from "react"

type Props = {
  onClose: () => void
}

const FormCreate = ({ onClose }: Props) => {
  const { addUser, loading, error } = useAddClient()

  const listParams = useMemo(() => ({ page: 1, limit: 16 }), [])
  const { refetch } = useClients(listParams) // move this to context

  const onSubmit = async (data: ClientModalFormData) => {
    const formatData = {
      name: data.name,
      salary: parseInt(data.salary),
      companyValuation: parseInt(data.companyValuation)
    } as ApiUser

    await addUser(formatData)
    onClose()
    refetch()
  }

  return <Form title="Criar cliente" loading={loading} onSubmit={onSubmit} />
}

export default FormCreate