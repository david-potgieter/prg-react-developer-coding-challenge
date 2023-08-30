import { FlagData } from '@core/types/room-types'

export function formatNewRoomObject(data: FlagData) {
  const output = { ...data.room }
  if (data?.action === 'add') {
    output.flagged = true
    output.flagged_date = new Date().toISOString()
  }
  if (data?.action === 'remove') {
    delete output.flagged
    delete output.flagged_date
  }
  return output
}
