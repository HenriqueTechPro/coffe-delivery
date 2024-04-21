import { api } from '../lib/axios'

export interface GetCoffeesResponse {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export async function getAllCoffees() {
  const response = await api.get<GetCoffeesResponse[]>('/coffees')

  return response.data
}
