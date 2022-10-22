import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton,styled} from '@mui/material';

// styled components
const StyledBox=styled(Box)`
  background-color:#f54236;
  display:flex;
  justify-content:center;
  align-items:center;
  height:48px;
`
const StyledImage=styled('img')({
  height:40,
})

function InfoHeader() {
  return (
    <div>
      <StyledBox>
        <Typography>
          For the best experience use inshorts app on your  smartphone.
        </Typography>
        
        <StyledImage src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" />
          <StyledImage src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" />
      </StyledBox>
    </div>
  )
}

export default InfoHeader