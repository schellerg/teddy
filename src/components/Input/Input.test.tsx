import { render } from "@test/utils"
import Input from "./Input"

describe("Input", () => {
  it("render input", () => {
    render(<Input inputSize="large" />)
  })
})