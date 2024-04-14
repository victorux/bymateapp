import { useLocation } from 'react-router-dom'

export default function useListingId() {
  const location = useLocation()
  const path = location.pathname
  return Number(path.split('/')[2])
}
