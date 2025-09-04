import { Button } from "@components"

const randomPosition = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const actionButtonsMock = [
  <Button key="button-1" label="Action 1" />,
  <Button key="button-2" label="Action 2" />,
  <Button key="button-3" label="Action 3" />,
]

export const clientsListMock = [
  {
    id: 1,
    name: "Pedro Henrique",
    salary: 10000,
    companyValuation: 50000,
    createdAt: new Date("2025-08-14T21:07:29.140Z"),
    updatedAt: new Date("2025-08-14T21:07:29.140Z"),
  },
  {
    id: 2,
    name: "João Silva",
    salary: 7500,
    companyValuation: 10000,
    createdAt: new Date("2025-06-21T21:09:33.250Z"),
    updatedAt: new Date("2025-08-21T21:06:30.000Z"),
  },
  {
    id: 3,
    name: "Gisele Lima",
    salary: 35500,
    companyValuation: 150000,
    createdAt: new Date("2025-01-01T00:05:30.000Z"),
    updatedAt: new Date("2025-01-07T17:07:13.290Z"),
  }
]

export const clientMock = clientsListMock[randomPosition(clientsListMock.length)]
