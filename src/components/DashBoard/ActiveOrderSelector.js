import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function ActiveOrderSelector({ orderType, setOrderType }) {
  // const [activeOrders, setActiveOrders] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setOrderType(event.target.value);
  };
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        backgroundColor: 'rgba(239, 240, 246, 1)',
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        borderRadius: '7px',
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">Orders</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={orderType}
        label="Acssdfsdfsdfr"
        onChange={handleChange}
        sx={{
          width: '150px',
        }}
      >
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>Confirmed</MenuItem>
        <MenuItem value={2}>Delivered</MenuItem>
        <MenuItem value={3}>Refund Completed</MenuItem>
        <MenuItem value={4}>Pending</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ActiveOrderSelector;
