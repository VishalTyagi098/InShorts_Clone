import * as React from 'react';
import {AppBar,Box,Toolbar,IconButton,styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Styled components
const StyledBox=styled(Box)`
  width:100%;
`;
const StyledHeader=styled(AppBar)`
  background-color:#ffff;
  height:70px;
`;

const StyledMenuIcon=styled(MenuIcon)`
  color:#000;
`

const Image=styled('img')({
  height:55,
  margin:'auto',
  paddingRight:70,
})

export default function Header() {
  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <StyledHeader position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledMenuIcon />
          </IconButton>
            <Image src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
        </Toolbar>
      </StyledHeader>
    </StyledBox>
  );
}
