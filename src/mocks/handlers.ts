import { http, HttpResponse, delay } from 'msw'
import { clientMock } from '@mocks/models'

const BASE_URL = "https://boasorte.teddybackoffice.com.br"

export const handlers = [
  http.get(`${BASE_URL}/users/:id`, async () => {
    await delay()
    return HttpResponse.json(clientMock)
  }),

  http.post(`${BASE_URL}/users`, async () => {
    await delay()
    return HttpResponse.json({}, { status: 201 })
  }),

  http.delete(`${BASE_URL}/users/:id`, async () => {
    await delay()
    return HttpResponse.json({}, { status: 200 })
  }),

  http.patch(`${BASE_URL}/users/:id`, async () => {
    await delay()
    return HttpResponse.json({}, { status: 200 })
  })
]