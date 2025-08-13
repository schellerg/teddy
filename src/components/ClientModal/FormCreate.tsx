import { useAddClient } from "@hooks"
import type { ApiUser, ClientModalFormData } from "@utils/types"

import Form from "./Form"

type Props = {
  onClose: () => void
  refetch: () => Promise<void>
}

const FormCreate = ({ onClose, refetch }: Props) => {
  const { addUser, loading, error } = useAddClient()

  const onSubmit = async (data: ClientModalFormData) => {
    const formatData = {
      name: data.name,
      salary: data.salary,
      companyValuation: data.companyValuation
    } as ApiUser

    await addUser(formatData)
    refetch()
    onClose()
  }

  return <Form title="Criar cliente" loading={loading} error={error} onSubmit={onSubmit} />
}

export default FormCreate