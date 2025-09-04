import '@testing-library/jest-dom'
import { cleanup } from "@testing-library/react"
import * as matchers from "@testing-library/jest-dom/matchers"
import { expect, afterEach } from "vitest"
import { server } from "@mocks/node"

expect.extend(matchers)

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true
  }

  HTMLDialogElement.prototype.close = function () {
    this.open = false
  }
})

beforeAll(() => {
  server.listen()
})

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => {
  server.close()
})