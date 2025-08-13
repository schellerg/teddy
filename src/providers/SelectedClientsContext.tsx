import React, { useState } from "react";
import type { Client } from "@utils/types";
import { SelectedClientsContext } from "@contexts/SelectedClientsContext";

const SelectedClientsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedClients, setSelectedClients] = useState<Client[]>([])

  const addSelectedClient = (client: Client) => {
    const newClient: Client = {
      id: client.id,
      name: client.name,
      salary: client.salary,
      companyValuation: client.companyValuation
    }
    return setSelectedClients([...selectedClients, newClient])
  }

  const removeSelectedClient = (id: number) => {
    console.log(selectedClients.filter(item => item.id !== id))

    setSelectedClients(selectedClients.filter(item => item.id !== id))
  }

  const clearSelectedClients = () => {
    setSelectedClients([])
  }

  return <SelectedClientsContext.Provider value={{ selectedClients, addSelectedClient, removeSelectedClient, clearSelectedClients }}>
    {children}
  </SelectedClientsContext.Provider>
}

export default SelectedClientsProvider