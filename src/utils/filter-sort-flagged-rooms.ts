import { RoomType } from '@core/types/room-types'

export function filterAndSortFlaggedRooms(data: RoomType[]) {
  return data
    .filter((room: RoomType) => room.flagged)
    .sort((a: RoomType, b: RoomType) => {
      const dateA = new Date(a.flagged_date || '')
      const dateB = new Date(b.flagged_date || '')
      return dateA.getTime() - dateB.getTime()
    })
}
