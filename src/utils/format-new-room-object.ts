import { EditActions } from '@core/config/query-keys'
import { FlagData } from '@core/types/room-types'

export function formatNewRoomObject(data: FlagData) {
  const output = { ...data.room }
  if (data?.action === EditActions.ADD) {
    output.flagged = true
    output.flagged_date = new Date().toISOString()
  }
  if (data?.action === EditActions.REMOVE) {
    delete output.flagged
    delete output.flagged_date
  }
  return output
}
