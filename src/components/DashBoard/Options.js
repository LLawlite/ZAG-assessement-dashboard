import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Options() {
  const [Options, setOptions] = useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
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
      <InputLabel id="demo-select-small-label">Options</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Options}
        label="Option"
        onChange={handleChange}
        sx={{
          width: '150px',
        }}
      >
        {/* <MenuItem value={1}>Confirmed</MenuItem>
        <MenuItem value={2}>Delivered</MenuItem>
        <MenuItem value={3}>Refund Completed</MenuItem>
        <MenuItem value={4}>Pending</MenuItem> */}
      </Select>
    </FormControl>
  );
}

export default Options;
