import * as React from 'react';
import {Box,Typography,styled} from '@mui/material';

// styled components
const StyledBox=styled(Box)`
  background-color:#f54236;
  display:flex;
  justify-content:center;
  align-items:center;
  height:48px;
`;
const StyledImage=styled('img')({
  height:40,
  marginLeft:20,
});

const StyledTypography=styled(Typography)`
  color:white;
`

function InfoHeader() {
  return (
    <div>
      <StyledBox>

        <StyledTypography>
          For the best experience use inshorts app on your  smartphone.
        </StyledTypography>
        
        <StyledImage src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" />
        <StyledImage src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" />
      </StyledBox>
    </div>
  )
}

export default InfoHeader