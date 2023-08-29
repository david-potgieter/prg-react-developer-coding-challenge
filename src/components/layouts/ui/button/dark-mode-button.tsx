import { darkModeAtom } from '@core/state/atoms/theme-atoms'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useAtom } from 'jotai'

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      type="button"
      className="transition ease-in-out delay-100 relative rounded-full bg-gray-100 dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white focus:outline-none"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Toggle Dark Mode</span>
      {darkMode ? (
        <IconSun className="h-6 w-6" aria-hidden="true" />
      ) : (
        <IconMoon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}
