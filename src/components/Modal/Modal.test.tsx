import { fireEvent, render, screen } from "@test/utils"
import Modal from "./Modal"

describe("Modal", () => {
  it("render modal", async () => {
    const onClose = vi.fn()

    render(<Modal isOpen={true} title="Test Modal" onClose={onClose}>
      <div>Modal Content</div>
    </Modal>)

    const dialog = screen.getByRole("dialog")

    fireEvent.keyDown(dialog, { key: "Escape", code: "Escape" })

    expect(onClose).toHaveBeenCalled()
  })
})