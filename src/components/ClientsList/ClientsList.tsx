import React from "react"

import { Card, ErrorMessage } from "@components"
import type { Client, ClientsListProps } from "@utils/types"

const ClientsList: React.FC<ClientsListProps> = ({ items, loading, error, renderActions }) => {
  /* TODO: Skeleton */
  if (loading)
    return <p data-testid="clients-list-loading">Carregando...</p>

  if (error)
    return <ErrorMessage message={error.message} />

  if (!items?.length)
    return <p className="mt-4" data-testid="clients-list-empty-results">Nenhum resultado encontrado.</p>

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 mt-3 mb-5">
        {
          items.map(
            (item: Client) => (
              <Card
                id={item.id}
                key={item.id}
                name={item.name}
                salary={item.salary}
                companyValuation={item.companyValuation}
                actions={renderActions ? renderActions(item) : []}
              />
            )
          )
        }
      </ul>
    </>
  )
}

export default ClientsList