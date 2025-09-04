import { describe, it, expect } from "vitest"
import { render, screen } from "@test/utils"

import { Plus } from "lucide-react"
import { Button } from "@components"

describe("Button", () => {
  it("renders a button with an icon (left)", () => {
    render(<Button label="Basic button" fullWidth icon={<Plus />} />)
    expect(screen.getByRole("button", { name: /basic button/i })).toBeInTheDocument()
  })

  it("renders an icon-only button", () => {
    render(<Button fullWidth icon={<Plus />} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
})