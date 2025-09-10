import { render } from "@test/utils"
import Pagination from "./Pagination"

describe("Pagination", () => {
  const props = {
    totalPages: 12,
    currentPage: 5,
    onPageChange: vi.fn()
  }

  it("render pagination with more than 5 items", () => {
    render(<Pagination {...props} />)
  })

  it("render pagination with less or equal to 5 items", () => {
    render(<Pagination {...props} totalPages={undefined} currentPage={undefined} />)
  })
})