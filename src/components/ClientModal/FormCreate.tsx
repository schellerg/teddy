import { useAddClient } from "@hooks"
import type { ApiUser, ClientModalFormData } from "@utils/types"

import Form from "./Form"

type Props = {
  onClose: () => void
}

const FormCreate = ({ onClose }: Props) => {
  const { addUser, loading, error } = useAddClient()

  const onSubmit = async (data: ClientModalFormData) => {
    const formatData = {
      name: data.name,
      salary: data.salary,
      companyValuation: data.companyValuation
    } as ApiUser

    await addUser(formatData)
    onClose()
  }

  return <Form title="Criar cliente" loading={loading} onSubmit={onSubmit} />
}

export default FormCreate