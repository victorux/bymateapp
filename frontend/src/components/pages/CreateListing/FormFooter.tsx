import useFormContext from '../../../hooks/useFormContext'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../common/Buttons/Button'

const FormFooter = () => {
  const navigate = useNavigate()
  const [isContentLong, setIsContentLong] = useState(false)

  const currentPath = useLocation().pathname
  // Get the form path from the URL without the current step
  const formPathURL = currentPath.substring(0, currentPath.lastIndexOf('/'))
  // Get the current step from the URL
  const stepFromURL = Number(location.pathname.split('/').pop())

  const { title } = useFormContext()

  const backHandler = () => {
    stepFromURL === 0 ? null : navigate(`${formPathURL}/${stepFromURL - 1}`)
  }

  const nextHandler = () => {
    console.log(Object.keys(title).length - 1)
    Object.keys(title).length - 1 === stepFromURL
      ? navigate('/')
      : navigate(`${formPathURL}/${stepFromURL + 1}`)
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
    <div
      className={`bg-white border-t border-neutral-200 bottom-0 left-0 right-0 w-full px-16 py-6 flex justify-between items-center ${
        isContentLong ? '' : ''
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
  )
}

export default FormFooter
