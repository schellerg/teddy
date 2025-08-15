import { useState } from "react"

import { deleteUser } from "@api"

const useDeleteClient = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>()

  const deleteClient = async (id: number) => {
    try {
      setLoading(true)
      await deleteUser(id)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  return { deleteClient, loading, error }
}

export default useDeleteClient