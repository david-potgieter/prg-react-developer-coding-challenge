import { HoldingCard, InventoryCard } from '@core/components/ui/card/inventory-card'
import { useInventory } from '@core/state/hooks/use-inventory'
import { RoomType } from '@core/types/room-types'
import { Fragment } from 'react'

export function InventoryCards() {
  const { data, isLoading, isError } = useInventory()
  const size = data?.length || 0

  return (
    <Fragment>
      {isLoading ? <HoldingCard text="Please wait..." /> : null}
      {!isLoading && size === 0 ? <HoldingCard text="Great news! No rooms to clean!" /> : null}
      {data?.map((item: RoomType) => (
        <div key={item.room_number} className="h-full">
          <InventoryCard item={item} />
        </div>
      ))}
    </Fragment>
  )
}
