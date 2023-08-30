export function HideOnMobile({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">{children}</div>
}
