import { http, HttpResponse } from 'msw'
import { clientMock } from '@mocks/models'

const BASE_URL = "https://boasorte.teddybackoffice.com.br"

export const handlers = [
  http.get(`${BASE_URL}/users/:id`, () => {
    return HttpResponse.json(clientMock)
  }),
  http.delete(`${BASE_URL}/users/:id`, () => {
    return HttpResponse.json({}, { status: 200 })
  })
]