import Button from '../../common/Buttons/Button'
import { useState, useEffect } from 'react'
import useFormContext from '../../../hooks/useFormContext'

const FormFooter = () => {
  const [isContentLong, setIsContentLong] = useState(false)

  const { setPage, page, title } = useFormContext()

  const backHandler = () => {
    page === 0 ? null : setPage(page - 1)
  }

  const nextHandler = () => {
    Object.keys(title).length - 1 === page ? null : setPage(page + 1)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsContentLong(window.innerHeight < document.body.scrollHeight)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Check initially
    return () => {
      window.removeEventListener('resize', handleResize) // Remove the event listener when the component is unmounted
    }
  }, [])

  return (
    <div>
      <div
        className={`border-t border-neutral-200 bottom-0 left-0 right-0 w-full px-16 py-6 flex justify-between items-center ${
          isContentLong ? '' : 'fixed'
        }`}
      >
        <Button border rounded="rounded-md" onClick={backHandler}>
          Back
        </Button>
        <Button
          color="primary"
          size="medium"
          rounded="rounded-md"
          onClick={nextHandler}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default FormFooter
