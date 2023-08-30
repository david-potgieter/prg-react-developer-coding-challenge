import { IconLayoutGrid, IconLayoutList } from '@tabler/icons-react'

export function ToggleGridDisplayButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      disabled={disabled}
      type="button"
      className="transition ease-in-out delay-100 relative rounded-full p-1 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white focus:outline-none">
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <IconLayoutGrid className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}

export function ToggleListDisplayButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      disabled={disabled}
      type="button"
      className="transition ease-in-out delay-100 relative rounded-full p-1 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white focus:outline-none">
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <IconLayoutList className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
