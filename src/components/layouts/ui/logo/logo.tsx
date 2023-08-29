import logoUrl from '@core/images/logo/icon-192.png'

export function Logo() {
  return (
    <div>
      <img src={logoUrl} alt="Logo" className="h-12 w-12" />
    </div>
  )
}
