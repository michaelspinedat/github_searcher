import { Container } from '@mui/material'
import React, { useState } from 'react'
import Searcher from './components/Searcher'

function App() {

  const [inputUser, setInputUser] = useState('octocat')

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
    </Container>
  )
}

export default App
