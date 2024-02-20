import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { fetchUniversitiesByName, type University } from '../services/api'
import { QUERY_KEYS } from '../services/config'

const useUniversities = (
  universityName: string
): UseQueryResult<University[], unknown> => {
  return useQuery<University[], unknown>({
    queryKey: [QUERY_KEYS.UNIVERSITIES, universityName],
    queryFn: async () => await fetchUniversitiesByName(universityName),
    staleTime: Infinity,
  })
}

export default useUniversities
