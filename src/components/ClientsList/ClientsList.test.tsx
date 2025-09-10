import { render, screen } from "@test/utils"
import { actionButtonsMock, clientsListMock } from "@mocks/models"
import ClientsList from "./ClientsList"

describe("ClientsList", () => {
  const clientsListFakeProps = {
    items: clientsListMock,
    loading: false,
    error: null,
    renderActions: () => [actionButtonsMock],
  }

  it("Renders a list loading", () => {
    render(<ClientsList {...clientsListFakeProps} loading={true} />)

    expect(screen.getByTestId("clients-list-loading")).toBeInTheDocument()
  })

  it("Renders a list with error", () => {
    const error = new Error("Erro ao carregar a lista")

    render(<ClientsList {...clientsListFakeProps} error={error} />)

    expect(screen.getByTestId("generic-error-message")).toBeInTheDocument()
  })

  it("Renders an empty list", () => {
    render(<ClientsList {...clientsListFakeProps} items={[]} />)

    expect(screen.getByTestId("clients-list-empty-results")).toBeInTheDocument()
  })

  it("Renders a list with items", () => {
    render(<ClientsList {...clientsListFakeProps} />)

    expect(screen.getAllByTestId("client-card").length).toBe(clientsListMock.length)
  })

  it("Renders a list without actions", () => {
    render(<ClientsList {...clientsListFakeProps} renderActions={undefined} />)
  })
})