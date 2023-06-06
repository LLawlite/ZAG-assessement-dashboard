import { Box, Typography } from '@mui/material';
import React from 'react';
import logo from '../utils/logo.png';
import MovingIcon from '@mui/icons-material/Moving';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
function Sidebar({ sidebarcomponentno, setSidebarcomponentno }) {
  // to set value of which componet is cliced
  const handleOnClick = (value) => {
    setSidebarcomponentno(value);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #cccccc',
        height: '100vh',
        width: '278px',
        boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={logo}
        sx={{
          width: '73px',
          height: '47px',
          marginTop: '25px',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '40px',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            backgroundColor:
              sidebarcomponentno === 1 ? 'rgba(27, 89, 248, 0.1)' : '',
            color: sidebarcomponentno === 1 ? 'rgb(27, 89, 248)' : '',
            borderRadius: '5px',
            padding: '5px 15px',
            cursor: 'pointer',
          }}
          onClick={() => {
            handleOnClick(1);
          }}
        >
          <MovingIcon />
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: '500',
              fontSize: '15px',
            }}
          >
            Report
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            backgroundColor:
              sidebarcomponentno === 2 ? 'rgba(27, 89, 248, 0.1)' : '',
            color: sidebarcomponentno === 2 ? 'rgb(27, 89, 248)' : '',
            borderRadius: '5px',
            padding: '5px 15px',
            cursor: 'pointer',
          }}
          onClick={() => {
            handleOnClick(2);
          }}
        >
          <StorageIcon />
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: '500',
              fontSize: '15px',
            }}
          >
            WorkSpaces
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            backgroundColor:
              sidebarcomponentno === 3 ? 'rgba(27, 89, 248, 0.1)' : '',
            color: sidebarcomponentno === 3 ? 'rgb(27, 89, 248)' : '',
            borderRadius: '5px',
            padding: '5px 15px',
            cursor: 'pointer',
          }}
          onClick={() => {
            handleOnClick(3);
          }}
        >
          <SettingsIcon />
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: '500',
              fontSize: '15px',
            }}
          >
            Settings
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
