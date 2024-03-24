import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const [isContentLong, setIsContentLong] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      setIsContentLong(window.innerHeight < document.body.scrollHeight)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Check initially
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (location.pathname === '/create-listing') {
    return null
  } else {
    return (
      <footer
        className={`absolute bottom-0 left-0 right-0 bg-neutral-75 py-6 ${
          isContentLong ? 'relative' : 'fixed'
        }`}
      >
        <div className="container flex justify-between">
          <div className="flex gap-8">
            <a href="#">support@bymate.com</a>
            <a href="#">Privacy & Terms</a>
            <a href="#">Testimonials</a>
            <a href="#">Sitemap</a>
          </div>
          <span>© 2024 bymate LTD.</span>
        </div>
      </footer>
    )
  }
}

export default Footer
