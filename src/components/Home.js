import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import DashBoard from './DashBoard';
import Report from '../components/Report';
import Settings from '../components/Settings';

function Home() {
  // to highlight which componets of sidebar is clicked
  const [sidebarcomponentno, setSidebarcomponentno] = useState(2);
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar
        setSidebarcomponentno={setSidebarcomponentno}
        sidebarcomponentno={sidebarcomponentno}
      />
      <Box sx={{ padding: '40px', width: '100%', backgroundColor: '#F5F5F5' }}>
        {sidebarcomponentno === 1 ? (
          <Report />
        ) : sidebarcomponentno === 2 ? (
          <DashBoard />
        ) : (
          <Settings />
        )}
      </Box>
    </Box>
  );
}

export default Home;
