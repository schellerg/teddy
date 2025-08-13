import { useState } from "react"

import { deleteUser } from "@api"

const useDeleteClient = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const deleteClient = async (id: number) => {
    try {
      setLoading(true)
      await deleteUser(id)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return { deleteClient, loading }
}

export default useDeleteClient