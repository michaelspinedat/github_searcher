import { Stack, Typography } from '@mui/material'
import React from 'react'

const UserInfo = ({ user }) => {

  const { name, login, created_at } = user

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='subtitle2' >{created_at}</Typography>
      </Stack>
      <Typography variant='caption' >@{login}</Typography>
    </>
  )
}

export default UserInfo