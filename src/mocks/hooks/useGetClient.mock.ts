import { vi } from "vitest"
import { clientMock } from "../models"

export const useGetClient = vi.fn(() => ({
  client: clientMock,
  loading: false,
  error: null,
}))

export const mockUseGetClientLoading = () => {
  useGetClient.mockReturnValue({
    client: clientMock,
    loading: true,
    error: null,
  })
}

export const mockUseGetClientSuccess = () => {
  useGetClient.mockReturnValue({
    client: clientMock,
    loading: false,
    error: null,
  })
}
