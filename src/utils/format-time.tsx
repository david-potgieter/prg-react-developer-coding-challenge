import { formatDistanceToNow } from 'date-fns'

export function formatTime(date?: string) {
  if (!date) return
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}
