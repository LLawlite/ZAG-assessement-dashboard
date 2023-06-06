import { Box, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
function Footer() {
  return (
    <Box
      sx={{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
        marginTop: '30px',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // borderBottom: '1px solid #888888',

          padding: '10px 20px',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '17px',
              fontWeight: '600',
            }}
          >
            Issues
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '17px',
              fontWeight: '600',
              color: 'rgba(47, 47, 47, 0.4)',
            }}
          >
            21
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: 'rgba(239, 240, 246, 1)',
            borderRadius: '50%',
            height: '30px',
            width: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AddIcon sx={{ fontSize: '16px' }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
