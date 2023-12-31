import { QueryKeys } from '@core/config/query-keys'
import { queryClient } from '@core/state/providers/query-provider'
import { FlagData, RoomType } from '@core/types/room-types'
import { updateRoomData } from '@core/utils/update-room-data'
import { useMutation } from '@tanstack/react-query'

export function useFlagForCleaning() {
  return useMutation({
    mutationFn: async (data: FlagData) => data,
    onMutate: async updatedItem => {
      await queryClient.cancelQueries({ queryKey: [QueryKeys.INVENTORY] })
      const prevInventory = queryClient.getQueryData([QueryKeys.INVENTORY])
      queryClient.setQueryData([QueryKeys.INVENTORY], old =>
        updateRoomData(old as RoomType[], updatedItem),
      )
      return { prevInventory }
    },
    onError: (err, newItem, context) => {
      queryClient.setQueryData([QueryKeys.INVENTORY], context?.prevInventory)
    },
  })
}
