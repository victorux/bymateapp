import { useState, createContext, useCallback, useMemo } from 'react'
import axios from 'axios'

interface User {
  id: string
  googleId: string
  full_name: string
  profile_img: string
}

interface UserContextType {
  user: User | null
  getUserAndUpdate: () => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  getUserAndUpdate: () => null,
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const getUserAndUpdate = useCallback(() => {
    axios
      .get('http://localhost:8080/api/auth/login/success', {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) return res
        throw new Error('Authentication failed')
      })
      .then((resObj) => {
        setUser(resObj.data.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const useUserContext: UserContextType = useMemo(
    () => ({ user, getUserAndUpdate }),
    [user, getUserAndUpdate]
  )

  return (
    <UserContext.Provider value={useUserContext}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

// const getUserAndUpdate = () => {
//   axios
//     .get('http://localhost:8080/api/auth/login/success', {
//       withCredentials: true,
//     })
//     .then((res) => {
//       if (res.status === 200) return res
//       throw new Error('Authentication failed')
//     })
//     .then((resObj) => {
//       setUser(resObj.data.user)
//     })
//     .catch((error) => {
//       console.log(error)
//     }
