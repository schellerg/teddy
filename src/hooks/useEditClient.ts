import { useState } from "react"

import type { ApiUser } from "@utils/types"
import { updateUser } from "@api"

const useEditClient = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const updateClient = async (params: ApiUser) => {
    console.log('useEditClient', params)
    try {
      setLoading(true)
      const res = await updateUser(params)
      // console.log(res)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  return { updateClient, loading, error }
}

export default useEditClient