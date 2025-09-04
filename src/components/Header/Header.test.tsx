import { act, render, screen } from "@test/utils"
import Header from "./Header"

describe("Header", () => {
  beforeEach(() => {
    localStorage.setItem("username", "John Doe")
  })

  it("Render the header", () => {
    render(<Header />)

    act(() => {
      screen.getByTestId("header-menu-button").click()
      screen.getAllByText("Sair")[0].click()
    })
  })
})