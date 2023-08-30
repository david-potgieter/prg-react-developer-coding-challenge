import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
// import { persistQueryClient } from '@tanstack/react-query-persist-client'
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       cacheTime: 1000 * 60 * 60 * 24, // 24 hours
//     },
//   },
// })

// const localStoragePersister = createSyncStoragePersister({ storage: window.localStorage })
// // const sessionStoragePersister = createSyncStoragePersister({ storage: window.sessionStorage })

// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
// })
