import { describe, it, expect } from "vitest"
import { render, screen } from "@test/utils"
import { ClientModalFormType } from "@utils/types"
import { ClientModal } from "@components"
import { clientMock, modalFakeProps } from "@mocks/models"

describe("Client Modal", () => {
  const testCases = [
    {
      label: "deletion",
      props: { client: clientMock, ...modalFakeProps, formType: ClientModalFormType.DELETE }
    },
    {
      label: "creation modal",
      props: { ...modalFakeProps, formType: ClientModalFormType.CREATE }
    },
    {
      label: "edition modal",
      props: { client: clientMock, ...modalFakeProps, formType: ClientModalFormType.EDIT }
    }
  ] as const

  it.each(testCases)("renders a $label modal", async ({ props }) => {
    render(<ClientModal {...props} />)

    const modal = screen.getByRole("dialog")
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveAttribute("open")

    if (props.formType !== ClientModalFormType.DELETE) {
      expect(await screen.findByTestId("client-form")).toBeInTheDocument();
      expect(screen.getByTestId("client-form-submit-button")).toBeInTheDocument()
    }

    const closeButton = screen.getByTestId("close-modal-button")
    closeButton.click()

    expect(modalFakeProps.setIsOpen).toHaveBeenCalledWith(false)
  })
})