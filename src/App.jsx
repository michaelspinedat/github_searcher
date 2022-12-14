import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Searcher from './components/Searcher'
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


  const handleUserChange = input => {
    setInputUser(input)
  }

  return (
    <Container sx={{
      backgroundColor: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher
        onSubmit={handleUserChange}
      />
      <h1>{user && user.name}</h1>
    </Container>
  )
}

export default App
