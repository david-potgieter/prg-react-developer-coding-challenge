export function ShowOnMobile({ children }: { children: React.ReactNode }) {
  return <div className="hidden lg:block">{children}</div>
}
