import { describe, it } from "vitest"
import { render, screen } from "@test/utils"
import { clientMock, modalFakeProps } from "@mocks/models"
import ClientModal from "./ClientModal"
import userEvent from "@testing-library/user-event"
import { ClientModalFormType } from "@utils/types"

describe("Client Form Edit", () => {
  it("renders an empty form and fills it", async () => {
    render(<ClientModal client={clientMock} formType={ClientModalFormType.EDIT} {...modalFakeProps} />)

    expect(screen.getByTestId("loading-form")).toBeInTheDocument()

    expect(await screen.findByTestId("client-form")).toBeInTheDocument()

    const nameInput = screen.getByTestId("client-form-name-input")
    const salaryInput = screen.getByTestId("client-form-salary-input")
    const companyValuationInput = screen.getByTestId("client-form-company-valuation-input")
    const submitButton = screen.getByTestId("client-form-submit-button")

    expect(nameInput).toHaveValue(clientMock.name)
    expect(salaryInput).toHaveValue(clientMock.salary.toString())
    expect(companyValuationInput).toHaveValue(clientMock.companyValuation.toString())

    // Clear form
    await userEvent.clear(nameInput)
    await userEvent.clear(salaryInput)
    await userEvent.clear(companyValuationInput)

    await userEvent.click(submitButton)

    expect(screen.getAllByText(/campo obrigatório/i).length).toBeGreaterThan(1)

    // Fill form
    await userEvent.type(nameInput, clientMock.name)
    await userEvent.type(salaryInput, clientMock.salary.toString())
    await userEvent.type(companyValuationInput, clientMock.companyValuation.toString())

    await userEvent.click(submitButton)

    screen.debug()
    expect(submitButton).toHaveTextContent(/salvando/i)
  })
})