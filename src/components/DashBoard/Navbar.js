import { Box, Typography } from '@mui/material';
import React from 'react';

function Navbar() {
  return (
    <Box
      sx={{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: '700',
          }}
        >
          Orders
        </Typography>
        <button
          style={{
            height: '50px',
            width: '128px',
            borderRadius: '15px',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '14px',
            backgroundColor: 'rgba(27, 89, 248, 1)',
            color: 'white',
          }}
        >
          + Add Orders
        </button>
      </Box>
    </Box>
  );
}

export default Navbar;
