import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { PaginationProvider, SelectedClientsProvider } from "@providers"
import type React from "react"

export const customNormalizer = (text: string) => {
  return text.replace(/\s+/g, ' ').trim()
}

const customRender = (ui: React.ReactNode, options = {}) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <SelectedClientsProvider>
        <PaginationProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </PaginationProvider>
      </SelectedClientsProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

export * from "@testing-library/react"
export { customRender as render }