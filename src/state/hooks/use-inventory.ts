import { QueryKeys } from '@core/config/query-keys'
import { SelectFunction } from '@core/types/room-types'
import { useQuery } from '@tanstack/react-query'

export function useInventory(select?: SelectFunction) {
  return useQuery({
    queryKey: [QueryKeys.INVENTORY],
    queryFn: async () => {
      const res = await fetch('/data/rooms.json')
      return await res.json()
    },
    select,
  })
}
