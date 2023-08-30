import { QueryKeys } from '@core/config/query-keys'
import { useQuery } from '@tanstack/react-query'

export function useInventory() {
  return useQuery({
    queryKey: [QueryKeys.INVENTORY],
    queryFn: async () => {
      const res = await fetch('/data/rooms.json')
      return await res.json()
    },
  })
}
