import { useInventory } from '@core/state/hooks/use-inventory'
import { Table } from '@core/types/room-types'

export function useTableData(initialConfig: Table) {
  const { data: rawData, isLoading, isError } = useInventory()

  const data = {
    title: initialConfig.title,
    description: initialConfig.description,
    columns: initialConfig.columns,
    data: rawData || [],
  }

  return { data, isLoading, isError }
}
