export interface RoomType {
  room_number: string
  category: string
  description: string
  image: string
  flagged?: boolean
  flagged_date?: string
}

export enum RoomColumns {
  ROOM_NUMBER = 'room_number',
  CATEGORY = 'category',
  DESCRIPTION = 'description',
  IMAGE = 'image',
  FLAGGED_DATE = 'flagged_date',
  EDIT = 'edit',
}

export const inventoryColumnNames = [
  { key: RoomColumns.ROOM_NUMBER, name: 'Number' },
  { key: RoomColumns.IMAGE, name: 'Image' },
  { key: RoomColumns.CATEGORY, name: 'Category' },
  { key: RoomColumns.DESCRIPTION, name: 'Description' },
  { key: RoomColumns.EDIT, name: 'Edit' },
]
export const cleaningColumnNames = [
  { key: RoomColumns.ROOM_NUMBER, name: 'Number' },
  { key: RoomColumns.IMAGE, name: 'Image' },
  { key: RoomColumns.CATEGORY, name: 'Category' },
  { key: RoomColumns.FLAGGED_DATE, name: 'Requested' },
  { key: RoomColumns.EDIT, name: 'Edit' },
]

export type RoomColumnNameType = { key: RoomColumns; name: string }[]

export interface Table {
  title: string
  description: string
  columns: RoomColumnNameType
  select?: SelectFunction
}

export type RoomTable = {
  data: RoomType[]
}

export type SelectFunction = (data: RoomType[]) => RoomType[]

export type FlagData = {
  room: RoomType
  action: string
}
