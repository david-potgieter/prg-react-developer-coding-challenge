import { IconBell } from '@tabler/icons-react'

export function BellIconButton() {
  return (
    <button
      type="button"
      className="transition ease-in-out delay-100 relative rounded-full bg-gray-100 dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white focus:outline-none"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <IconBell className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
