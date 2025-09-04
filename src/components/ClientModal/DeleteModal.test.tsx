import { describe, it } from "vitest"
import { act, render, screen } from "@test/utils"
import { ClientModalFormType } from "@utils/types"
import { ClientModal } from "@components"
import { clientMock, modalFakeProps } from "@mocks/models"

describe("Client Delete Modal", () => {
  it("renders the deletion modal", async () => {
    render(<ClientModal client={clientMock} {...modalFakeProps} formType={ClientModalFormType.DELETE} />)

    act(() => {
      screen.getByTestId("deletion-modal-submit-button").click()
    })
  })
})