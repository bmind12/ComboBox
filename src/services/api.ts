import axiosClient from './axiosClient'
import { API } from './config'

export interface University {
  alpha_two_code: string
  'state-province': string | null
  domains: string[]
  name: string
  web_pages: string[]
  country: string
}

export const fetchUniversitiesByName = async (
  name: string
): Promise<University[]> => {
  const response = await axiosClient.get<University[]>(API.ENDPOINTS.SEARCH, {
    params: {
      country: API.DEFAULT_PARAMS.COUNTRY,
      name,
    },
  })

  return response.data
}
