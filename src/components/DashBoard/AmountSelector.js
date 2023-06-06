import React, { useState, useEffect } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function AmountSelector({ amountRange, setAmountRange }) {
  const [amount, setAmount] = useState('');

  const handleChange = (event) => {
    setAmountRange(event.target.value);
    // console.log(amount);
  };
  // useEffect(() => {
  //   console.log(amount); // Log the updated value of amount whenever it changes
  // }, [amount]);
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
      <InputLabel id="demo-select-small-label">Amount</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={amountRange}
        label="amount"
        onChange={handleChange}
        sx={{
          width: '150px',
        }}
      >
        {' '}
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>below 500</MenuItem>
        <MenuItem value={2}>500 to 1000</MenuItem>
        <MenuItem value={3}>1000 to 2000</MenuItem>
        <MenuItem value={4}>2000 and above</MenuItem>
      </Select>
    </FormControl>
  );
}

export default AmountSelector;
