import { api } from '../lib/axios'

export interface GetCepResponse {
  cep: string
  logradouro?: string
  complemento?: string
  bairro?: string
  localidade?: string
  uf?: string
}

export async function getCep(
  zipcodeFormatted: string,
): Promise<GetCepResponse | null> {
  // Verificar se o CEP está vazio
  if (!zipcodeFormatted) {
    return null // Se estiver vazio, retornar null
  }

  try {
    const response = await api.get<GetCepResponse>(
      `http://viacep.com.br/ws/${zipcodeFormatted}/json/`,
    )

    return response.data
  } catch (error) {
    // Se ocorrer um erro na requisição (por exemplo, erro 404), retornar null
    return null
  }
}
