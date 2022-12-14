import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'

const Item = ({ icon, info, link }) => (
  <Stack direction='row' spacing={2}>
    {icon}
    {
      (link && info)
        ? <a target='_blank' href={info} rel='noopener noreferrer'><Typography>{info || 'Not Available'}</Typography></a>
        : <Typography>{info || 'Not Available'}</Typography>
    }

  </Stack>
)

const UserLocation = ({ user }) => {

  const { location, twitter_username, blog, company } = user

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12} sm={6}>
        <Item icon={<LocationOnIcon />} info={location} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Item icon={<TwitterIcon />} info={twitter_username && `@${twitter_username}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Item
          icon={<LanguageIcon />}
          info={blog}
          link
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Item icon={<BusinessIcon />} info={company} />
      </Grid>
    </Grid>
  )
}

export default UserLocation