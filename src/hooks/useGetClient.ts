import { useCallback, useEffect, useState } from "react"

import type { Client } from "@utils/types"
import { getUser } from "@api"

const useGetClient = (clientId: number) => {
  const [client, setClient] = useState<Client>()
  const [loading, setLoading] = useState<boolean>(false)

  const getClient = useCallback(
    async () => {
      try {
        setLoading(true)
        const res = await getUser(clientId)
        setClient(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, [clientId])

  useEffect(() => {
    getClient()
  }, [getClient])

  return { client, loading }
}

export default useGetClient