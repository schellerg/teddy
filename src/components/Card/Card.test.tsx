import { describe, it, expect } from "vitest"
import { render, screen, customNormalizer } from "@test/utils"

import { formatMoney } from "@utils/formatMoney"
import { clientMock, actionButtonsMock } from "@mocks/models"
import { Card } from "@components"

describe("Card", () => {
  const formattedSalary = formatMoney(clientMock.salary)
  const formattedCompanyValuation = formatMoney(clientMock.companyValuation)

  it("render a card without actions", async () => {
    render(<Card {...clientMock} />)
    expect(screen.getByTestId('name-display')).toHaveTextContent(clientMock.name)
    expect(screen.getByTestId('salary-display')).toHaveTextContent(customNormalizer(`Salário: ${formattedSalary}`))
    expect(screen.getByTestId('company-valuation-display')).toHaveTextContent(customNormalizer(`Empresa: ${formattedCompanyValuation}`))
  })

  it("render a card with one action", async () => {
    render(<Card {...clientMock} actions={[actionButtonsMock[0]]} />)
    expect(screen.getByRole("button", { name: /action 1/i })).toBeInTheDocument()
  })

  it("render a card with more than one action", async () => {
    render(<Card {...clientMock} actions={actionButtonsMock} />)
    expect(screen.getByRole("button", { name: /action 1/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /action 2/i })).toBeInTheDocument()
  })
})