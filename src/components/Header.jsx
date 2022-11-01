import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import TungstenIcon from '@mui/icons-material/Tungsten';
import Typography from '@mui/material/Typography';
import "./Header.css";

const Header = () => {
  return (
        <>
          <header className = "header">
              <DescriptionIcon className='header--icon'/>
              <Typography variant="h4">Make Notes</Typography>
              <TungstenIcon className='header--logo'/>
          </header>
        </>
)
}

export default Header;