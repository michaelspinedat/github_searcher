import React, { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searcher = ({ onSubmit }) => {

  const [valueInput, setValueInput] = useState('')

  const handleSearcherChange = e => setValueInput(e.target.value)

  const handleSubmit = () => onSubmit(valueInput)

  return (
    <Stack direction='row' sx={{
      marginTop: '30px',
      width: '80%'
    }}>
      <TextField
        id='outlined-basic'
        label='Github User'
        variant='outlined'
        placeholder='Octocat'
        size='small'
        sx={{
          width: '90%'
        }}
        value={valueInput}
        onChange={handleSearcherChange}
      ></TextField>
      <IconButton
        onClick={handleSubmit}
        size='small'
        sx={{
          left: '-45px'
        }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher