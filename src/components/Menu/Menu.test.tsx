import { act, render, screen } from "@test/utils"
import Menu from "./Menu"

describe("Menu", () => {
  it("render menu", () => {
    const props = {
      items: [],
      isMenuOpen: true,
      onClose: () => vi.fn(),
    }

    render(<Menu {...props} />)

    act(() => {
      screen.getByTestId("close-menu-button").click()
    })
  })
})