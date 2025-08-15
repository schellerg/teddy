import type { ApiUser, ApiListUsers, ApiListUsersParams } from '@utils/types'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://boasorte.teddybackoffice.com.br",
  headers: {
    'Content-Type': "application/json",
  }
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "Erro inesperado. Tente novamente mais tarde."

    if (error.response) {
      const statusCode = error.response.status

      if (statusCode >= 400 && statusCode < 500)
        errorMessage = "Algo deu errado na sua solicitação. Verifique os dados e tente novamente."

      if (statusCode >= 500 && statusCode < 600)
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde."
    }

    if (error.request)
      errorMessage = "Erro de rede. Verifique sua conexão e tente novamente."

    const customErrorMessage = new Error(errorMessage)
    return Promise.reject(customErrorMessage)
  }
)

export const createUser = async (params: ApiUser): Promise<ApiUser> => {
  const response = await api.post("/users", params)

  return response.data
}

export const deleteUser = async (params: number) => {
  const response = await api.delete(`/users/${params}`)

  return response.data
}

export const getUser = async (id: number) => {
  const response = await api.get<ApiUser>(`/users/${id}`)

  return response.data
}

export const listUsers = async (params: ApiListUsersParams): Promise<ApiListUsers> => {
  const response = await api.get<ApiListUsers>("/users", { params })

  return response.data
}

export const updateUser = async (params: ApiUser) => {
  const response = await api.patch(`/users/${params.id}`, {
    name: params.name,
    salary: params.salary,
    companyValuation: params.companyValuation
  })

  return response.data
}

export default api