import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  let errorMessage: string
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'Unknown error'
  }

  return (
    <div className="w-full h-full flex justify-center items-center align-middle bg-red-400">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </div>
    </div>
  )
}
