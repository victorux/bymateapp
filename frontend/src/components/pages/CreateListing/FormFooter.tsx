import useFormContext from '../../../hooks/useFormContext'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../common/Buttons/Button'
import axios from 'axios'

const FormFooter = ({ canNextPage }: { canNextPage: boolean }) => {
  const { formData } = useFormContext()
  const navigate = useNavigate()
  const [isContentLong, setIsContentLong] = useState(false)

  const currentPath = useLocation().pathname
  const formPathURL = currentPath.substring(0, currentPath.lastIndexOf('/'))
  const stepFromURL = Number(location.pathname.split('/').pop())
  const listingId = Number(location.pathname.split('/')[2])

  const { title } = useFormContext()

  const backHandler = () => {
    stepFromURL === 0 ? null : navigate(`${formPathURL}/${stepFromURL - 1}`)
  }

  const nextHandler = () => {
    Object.keys(title).length - 1 === stepFromURL
      ? publishListing()
      : navigate(`${formPathURL}/${stepFromURL + 1}`)
  }

  const publishListing = async () => {
    axios
      .put('http://localhost:8080/api/listings/publish-listing', {
        listingData: formData,
        listingId: listingId,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('Listing published')
          // navigate('/listings')
        }
      })
      .catch((err) => {
        console.log(err)
      })
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
        disabled={!canNextPage}
      >
        {stepFromURL === 13 ? 'Publish' : 'Next'}
      </Button>
    </div>
  )
}

export default FormFooter
