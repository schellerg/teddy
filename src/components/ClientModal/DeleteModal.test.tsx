import { describe, it } from "vitest"
import { act, render, screen } from "@test/utils"
import { ClientModalFormType } from "@utils/types"
import { ClientModal } from "@components"
import { clientMock } from "@mocks/models"

describe("Client Delete Modal", () => {
  const modalFakeProps = {
    isOpen: true,
    setIsOpen: vi.fn(),
    refetch: vi.fn(),
  }

  it("renders the deletion modal", async () => {
    render(<ClientModal client={clientMock} {...modalFakeProps} formType={ClientModalFormType.DELETE} />)

    act(() => {
      const submitButton = screen.getByTestId("deletion-modal-submit-button")
      submitButton.click()
    })
  })
})