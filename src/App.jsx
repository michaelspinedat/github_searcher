import { Alert, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Searcher from './components/Searcher'
import UserCard from './components/UserCard'
import { getUser } from './services/user'

const defaultUser = 'octocat'

function App() {

  const [inputUser, setInputUser] = useState(defaultUser)

  const [user, setUser] = useState(null)

  const [userBeenFound, setUserBeenFound] = useState(true)

  useEffect(() => {

    const getUserData = async () => {
      let userRes = await getUser(inputUser)
      let userFound = true

      if (inputUser === defaultUser)
        localStorage.setItem(defaultUser, JSON.stringify(userRes))

      if (userRes.message === 'Not Found') {
        userFound = false
        userRes = JSON.parse(localStorage.getItem(defaultUser))
      }

      setUserBeenFound(userFound)
      setUser(userRes)
    }

    getUserData()

  }, [inputUser])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!userBeenFound)
        setUserBeenFound(true)
    }, [2500])

    return () => clearTimeout(timer)
  }, [userBeenFound])


  const handleUserChange = input => {
    setInputUser(input)
  }

  return (
    <Container
      sx={{
        backgroundColor: 'whitesmoke',
        width: { xs: '100 vw', sm: '80vw' },
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '5px', sm: '20px' }
      }}>
      <Searcher
        onSubmit={handleUserChange}
      />
      {!userBeenFound && <Alert severity="error">The user entered does not exist</Alert>}
      {user && <UserCard user={user} />}
    </Container>
  )
}

export default App
