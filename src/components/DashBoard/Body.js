import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import progress from '../../utils/progress.png';
import DataTable from './DataTable';

function Body({ orderType, setOrderType, orderSum, setOrderSum }) {
  const [orderName, setOrderName] = useState('');
  useEffect(() => {
    if (orderType === 0 || orderType === 1) {
      setOrderName('Confirmed');
    } else if (orderType === 2) {
      setOrderName('Delivered');
    }
    if (orderType === 3) {
      setOrderName('Refund');
    }
    if (orderType === 4) {
      setOrderName('Pending');
    }
  }, [orderType]);
  return (
    <Box
      sx={{
        width: '97%',
        // border: '2px solid black',

        marginTop: '20px',
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        // border: '2px solid red',
        height: '66vh',
        overflowY: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '17px' }}
          >
            {orderName}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: '600',
              fontSize: '17px',
              color: 'rgba(47, 47, 47, 0.4)',
            }}
          >
            {orderSum}
          </Typography>
        </Box>
        <Box
          sx={{
            background: 'rgba(239, 240, 246, 1)',

            borderRadius: '50%',
            height: '36px',
            width: '36px',
            textAlign: 'center',
            textJustify: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box component="img" src={progress}></Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: '2px solid rgba(244, 245, 247, 1)',
          marginTop: '10px',
        }}
      >
        {/* Content of the box */}
      </Box>
      {/* <EnhancedTable /> */}
      <DataTable
        orderType={orderType}
        setOrderType={setOrderType}
        orderSum={orderSum}
        setOrderSum={setOrderSum}
      />
    </Box>
  );
}

export default Body;
