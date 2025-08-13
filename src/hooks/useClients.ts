import { useCallback, useContext, useEffect, useState } from "react"
import { SelectedClientsContext } from "@contexts"
import type { Client, SelectedClientsContextType } from "@utils/types"

import { listUsers } from "@api"
import type { ApiListUsersParams } from "@utils/types"

const useClients = ({ page, limit }: ApiListUsersParams) => {
  const { selectedClients } = useContext(SelectedClientsContext) as SelectedClientsContextType

  const [users, setUsers] = useState<Client[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const res = await listUsers({ page, limit })
      const alreadySelected = new Set(selectedClients.map(item => item.id))
      const filteredClients = res.clients.filter(client => !alreadySelected.has(client.id))

      setUsers(filteredClients.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()))
      setTotalPages(res.totalPages)
      setError(null)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [page, limit, selectedClients])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { users, totalPages, loading, error, refetch: fetchData }
}

export default useClients