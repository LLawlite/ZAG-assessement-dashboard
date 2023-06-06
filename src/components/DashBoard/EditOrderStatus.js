import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function EditOrderStatus() {
  // const [editOrderStatus, setEditOrderStatus] = useState('');

  const handleChange = (event) => {
    // setEditOrderStatus(event.target.value);
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
      <InputLabel id="demo-select-small-label">
        <MoreHorizIcon sx={{ color: 'rgba(130, 130, 130, 1)' }} />
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={<MoreHorizIcon />}
        label="Acssdfsdfsdfr"
        onChange={handleChange}
        sx={{
          width: '150px',
        }}
        inputProps={{ IconComponent: () => null }}
      >
        <MenuItem value={1}>Confirmed</MenuItem>
        <MenuItem value={2}>Delivered</MenuItem>
        <MenuItem value={3}>Refund Completed</MenuItem>
        <MenuItem value={4}>Pending</MenuItem>
      </Select>
    </FormControl>
  );
}

export default EditOrderStatus;
