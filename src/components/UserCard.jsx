import { CardMedia, Grid, Stack } from '@mui/material'
import React from 'react'
import UserDescription from './UserDescription'
import UserInfo from './UserInfo'

const UserCard = ({ user }) => {

  const { avatar_url } = user

  return (
    <Grid
      container
      spacing={2}
      marginTop={1}
    >
      <Grid item xs={12} md={3}

      >
        <CardMedia
          component='img'
          alt='Github Avatar User'
          image={avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px',
            maxWidth: '300px',
            margin: 'auto'
          }}
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <Stack
          direction='column'
          spacing={1}
          sx={{
            margin: '30px'
          }}
        >
          <UserInfo user={user} />
          <UserDescription user={user} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard