import { useInventory } from '@core/state/hooks/use-inventory'
import { Widget } from '@core/types/room-types'

export function useWidget(initialConfig: Widget) {
  const { data: rawData, isLoading, isError } = useInventory(initialConfig?.select)

  const data = {
    stat: rawData?.length,
    ...initialConfig,
  } as Widget

  return { data, isLoading, isError }
}
