import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import UserLocation from './UserLocation'
import UserStats from './UserStats'

const UserDescription = ({ user }) => {

  const { bio } = user

  return (
    <>
      <Stack
        justifyContent='center'
      >
        <Typography variant='body1'>
          {bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi at expedita accusantium quos vitae? Pariatur, possimus adipisci beatae perferendis aperiam corrupti aut nesciunt modi ut reprehenderit illum odio minima.'}
        </Typography>
      </Stack>
      <UserStats user={user} />
      <UserLocation user={user} />
    </>
  )
}

export default UserDescription