import { describe, it } from "vitest"
import { render, screen } from "@test/utils"
import Form from "./Form"

describe("Client Modal", () => {
  const modalFakeProps = {
    title: "Form",
    loading: false,
    error: new Error("Ocorreu um erro"),
    onSubmit: vi.fn(),
  }

  it("Render form with an error message", async () => {
    render(<Form {...modalFakeProps} />)

    expect(screen.getByTestId("generic-error-message")).toBeInTheDocument()
  })
})