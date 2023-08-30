import { useFlagForCleaning } from '@core/state/hooks/use-flag-for-cleaning'
import { FlagData, RoomType } from '@core/types/room-types'
import { Popover, Transition } from '@headlessui/react'
import { IconDots, IconFlag, IconFlagCheck, IconPencil } from '@tabler/icons-react'
import { Fragment } from 'react'

export function InventoryEdit({ item }: { item: RoomType }) {
  const { mutate, isLoading } = useFlagForCleaning()

  function handleCleaningFlag(room: RoomType, action: string) {
    console.log('handleCleaningFlag', room, action)
    mutate({ room, action })
  }

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900">
        <IconDots className="h-6 w-6 text-gray-500" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className="absolute -top-10 -left-[230px] z-10 flex w-screen max-w-max px-4">
          <div className="w-[200px] flex-auto rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="relative rounded-lg p-4 hover:bg-gray-50">
              {item?.flagged ? (
                <button
                  onClick={() => handleCleaningFlag(item, 'remove')}
                  className="font-semibold text-gray-900 flex justify-between items-center align-middle w-full">
                  Mark as Cleaned
                  <IconFlagCheck className="h-5 w-5 text-violet-700" aria-hidden="true" />
                  <span className="absolute inset-0" />
                </button>
              ) : (
                <button
                  onClick={() => handleCleaningFlag(item, 'add')}
                  className="font-semibold text-gray-900 flex justify-between items-center align-middle w-full">
                  Flag for Cleaning
                  <IconFlag className="h-5 w-5 text-violet-700" aria-hidden="true" />
                  <span className="absolute inset-0" />
                </button>
              )}
            </div>
            <div className="relative rounded-lg p-4 hover:bg-gray-50">
              <a
                href="#"
                className="font-semibold text-gray-400 cursor-not-allowed  flex justify-between items-center align-middle">
                Manage
                <IconPencil className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="absolute inset-0" />
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
