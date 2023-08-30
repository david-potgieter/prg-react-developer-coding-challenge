import { FlagData, RoomType } from '@core/types/room-types'
import { formatNewRoomObject } from '@core/utils/format-new-room-object'

export function updateRoomData(originalArray: RoomType[], data: FlagData) {
  const output = [...originalArray]
  const newRoomObject = formatNewRoomObject(data)
  const roomIndex = output.findIndex(room => room.room_number === newRoomObject.room_number)
  if (roomIndex > -1) output.splice(roomIndex, 1, newRoomObject)
  return output
}
