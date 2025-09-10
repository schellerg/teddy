import { describe, it } from "vitest"
import { render, screen } from "@test/utils"
import { clientMock, modalFakeProps } from "@mocks/models"
import ClientModal from "./ClientModal"
import userEvent from "@testing-library/user-event"
import { ClientModalFormType } from "@utils/types"

describe("Client Form Create", () => {
  it("renders an empty form and fills it", async () => {
    render(<ClientModal formType={ClientModalFormType.CREATE} {...modalFakeProps} />)

    const nameInput = screen.getByTestId("client-form-name-input")
    const salaryInput = screen.getByTestId("client-form-salary-input")
    const companyValuationInput = screen.getByTestId("client-form-company-valuation-input")

    await userEvent.type(nameInput, clientMock.name)
    await userEvent.type(salaryInput, clientMock.salary.toString())
    await userEvent.type(companyValuationInput, clientMock.companyValuation.toString())

    expect(nameInput).toHaveValue(clientMock.name)
    expect(salaryInput).toHaveValue(clientMock.salary.toString())
    expect(companyValuationInput).toHaveValue(clientMock.companyValuation.toString())

    await userEvent.click(screen.getByTestId("client-form-submit-button"))
  })
})