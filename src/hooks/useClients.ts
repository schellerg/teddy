import { useCallback, useContext, useEffect, useState } from "react"
import { SelectedClientsContext } from "@contexts"
import type { Client, SelectedClientsContextType } from "@utils/types"

import { listUsers } from "@api"
import type { ApiListUsersParams } from "@utils/types"

const useClients = (params: ApiListUsersParams) => {
  const { selectedClients } = useContext(SelectedClientsContext) as SelectedClientsContextType

  const [users, setUsers] = useState<Client[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const res = await listUsers(params)
      const alreadySelected = new Set(selectedClients.map(item => item.id))
      const filtedClients = res.clients.filter(client => !alreadySelected.has(client.id))

      setUsers(filtedClients.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()))
      setTotalPages(res.totalPages)
      setError(null)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [params, selectedClients])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { users, totalPages, loading, error, refetch: fetchData }
}

export default useClients