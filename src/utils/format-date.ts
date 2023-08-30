import { format } from 'date-fns'

export function formatDate(date?: string, formatString: string = 'MM/dd/yyyy') {
  if (!date) return
  return format(new Date(date), formatString)
}
