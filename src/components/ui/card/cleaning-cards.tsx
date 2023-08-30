import { HoldingCard, InventoryCard } from '@core/components/ui/card/inventory-card'
import { useInventory } from '@core/state/hooks/use-inventory'
import { RoomType } from '@core/types/room-types'
import { filterAndSortFlaggedRooms } from '@core/utils/filter-sort-flagged-rooms'
import { Fragment } from 'react'

export function CleaningCards() {
  const select = (data: RoomType[]) => filterAndSortFlaggedRooms(data)
  const { data, isLoading, isError } = useInventory(select)
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
