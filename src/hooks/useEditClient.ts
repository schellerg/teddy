import { useState } from "react"

import type { ApiUser } from "@utils/types"
import { updateUser } from "@api"

const useEditClient = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const updateClient = async (params: ApiUser) => {
    try {
      setLoading(true)
      await updateUser(params)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  return { updateClient, loading, error }
}

export default useEditClient