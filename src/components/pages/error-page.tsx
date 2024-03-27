import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.error(error)

  return (
    <div className="container py-20 text-center">
      <h1 className="font-bold">Oops!</h1>
      <p className="mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2">
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </p>
    </div>
  )
}
