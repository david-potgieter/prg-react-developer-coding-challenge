import { Logo } from '@core/components/ui/logo/logo'
import { routeConfig } from '@core/config/routes'
import { darkModeAtom } from '@core/state/atoms/theme-atoms'
import { cn } from '@core/utils/cn'
import { Disclosure } from '@headlessui/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BellIconButton } from '../ui/button/bell-icon-button'
import { DarkModeButton } from '../ui/button/dark-mode-button'

export function DashboardLayout(props: { title: string; children: ReactNode }) {
  const darkMode = useAtomValue(darkModeAtom)
  return (
    <div className={cn('min-h-full', darkMode ? 'dark' : '')}>
      <div className="bg-white dark:bg-gray-700 min-h-screen transition ease-in-out delay-100">
        <div className="bg-gray-100 dark:bg-gray-800 pb-32 transition ease-in-out delay-100">
          <Disclosure
            as="nav"
            className="bg-gray-100 dark:bg-gray-800 transition ease-in-out delay-100">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="border-b border-gray-200 dark:border-gray-700">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Logo />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {routeConfig.map(item => {
                              // const current = item.path === window.location.pathname
                              const current = false
                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={cn(
                                    current
                                      ? 'bg-gray-900 text-white'
                                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium',
                                  )}
                                  aria-current={current ? 'page' : undefined}>
                                  {item.name}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-2">
                          <BellIconButton />
                          <DarkModeButton />
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-500 dark:text-gray-400 focus:outline-none">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <IconX className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-200 dark:border-gray-700 md:hidden">
                  <div className="space-y-1 px-2 py-3 sm:px-3">
                    {routeConfig.map(item => {
                      const current = false
                      return (
                        <Disclosure.Button
                          key={item.name}
                          as={Link}
                          to={item.path}
                          className={cn(
                            current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium',
                          )}
                          aria-current={current ? 'page' : undefined}>
                          {item.name}
                        </Disclosure.Button>
                      )
                    })}
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <BellIconButton />
                      <DarkModeButton />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-700 dark:text-white">
                {props.title}
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <section>
              <div className="overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-200 shadow min-h-[300px]">
                <div className="p-6 pb-14">{props.children}</div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
