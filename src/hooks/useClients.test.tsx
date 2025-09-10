import { renderHook } from "@testing-library/react"
import { SelectedClientsProvider } from "@providers"
import { useClients } from "@hooks"

describe("useClients", () => {
  it("should fetch and return clients data", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SelectedClientsProvider>
        {children}
      </SelectedClientsProvider>
    )

    renderHook(() => useClients({ page: 1, limit: 10 }), { wrapper })
  })
})