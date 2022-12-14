import { Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Stat = ({ label, stat }) => (
  <Stack>
    <Typography variant='h5'>{label}</Typography>
    <Typography variant='h6'>{stat}</Typography>
  </Stack>
)

const UserStats = ({ user }) => {

  const { public_repos, followers, following } = user

  return (
    <Paper elevation={3}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-evenly'
        margin={2}
      >
        <Stat label='Repos' stat={public_repos} />
        <Stat label='Followers' stat={followers} />
        <Stat label='Following' stat={following} />
      </Stack>
    </Paper>
  )
}

export default UserStats