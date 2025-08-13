import { useState } from "react"

import type { ApiUser } from "@utils/types"
import { createUser } from "@api"

const useAddClient = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const addUser = async (params: ApiUser) => {
    try {
      setLoading(true)
      const res = await createUser(params)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  return { addUser, loading, error }
}

export default useAddClient