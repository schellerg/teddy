import { render } from "@test/utils"
import Container from "./Container"

describe("Container", () => {
  it("Render a container", () => {
    render(<Container><p>Lorem ipsum sit dolor</p></Container>)
  })
})