import { useEffect, useState } from "react"

import { listUsers } from "@api"
import type { ApiListUsers, ApiListUsersParams } from "@utils/types"

const useClients = (params: ApiListUsersParams) => {
  const [users, setUsers] = useState<ApiListUsers[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listUsers(params)
        setUsers(res.clients)
        setTotalPages(res.totalPages)
        setError(null)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params])

  return { users, totalPages, loading, error }
}

export default useClients