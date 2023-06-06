import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './DashBoard/Navbar';
import Body from './DashBoard/Body';
import Footer from './DashBoard/Footer';

function DashBoard() {
  const [orderType, setOrderType] = useState(0);
  const [orderSum, setOrderSum] = useState(0);

  return (
    <Box>
      <Navbar />
      <Body
        orderType={orderType}
        setOrderType={setOrderType}
        orderSum={orderSum}
        setOrderSum={setOrderSum}
      />
      <Footer />
    </Box>
  );
}

export default DashBoard;
