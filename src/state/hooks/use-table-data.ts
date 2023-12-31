import { useInventory } from '@core/state/hooks/use-inventory'
import { Table } from '@core/types/room-types'

export function useTableData(initialConfig: Table) {
  const { data: rawData, isLoading, isError } = useInventory(initialConfig?.select)

  const data = {
    data: rawData || [],
    ...initialConfig,
  }

  return { data, isLoading, isError }
}
