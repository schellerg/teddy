import React, { useState } from "react";
import type { Client } from "@utils/types";
import { SelectedClientsContext } from "@contexts/SelectedClientsContext";

const SelectedClientsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clients, setClients] = useState<Client[]>([])

  const addClient = (client: Client) => {
    const newClient: Client = {
      id: client.id,
      name: client.name,
      salary: client.salary,
      companyValuation: client.companyValuation
    }
    setClients([...clients, newClient])
  }

  const removeClient = (id: number) => {
    setClients(clients.filter(item => item.id !== id))
  }

  const clearClients = () => {
    setClients([])
  }

  return <SelectedClientsContext.Provider value={{ clients, addClient, removeClient, clearClients }}>
    {children}
  </SelectedClientsContext.Provider>
}



export default SelectedClientsProvider