import React, { useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import '../../styles/DataTable.css';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function DataTableRow({ data, orderType }) {
  // to reperent which order status is selected in filter and represent that particual orderstatus values
  const [order, setOrder] = useState(data.confirmed);

  useEffect(() => {
    console.log(orderType);
    if (orderType === 1) {
      setOrder(data.confirmed);
    } else if (orderType === 2) {
      console.log('delivered');
      setOrder(data.delivered);
    } else if (orderType === 3) {
      setOrder(data.refund);
    } else {
      setOrder(data.pending);
    }
  }, [orderType]);

  const date = data.day + '/' + data.month + '/' + data.year;

  return (
    <tr>
      <td className="icon-column">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon />}
          sx={{ paddingRight: '0px' }}
        />
      </td>
      <td className="company-name-column">
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box component="img" src={data.image} />
          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(0, 0, 0, 0.5)',
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: 'Inter',
              }}
            >
              {data.subtitle}
            </Typography>
          </Box>
        </Box>
      </td>
      <td className="active-orders-column">{order}</td>
      <td className="amount-column">{data.amount}</td>
      <td className="placedon-column">{date}</td>
      <td className="placedon-column">
        <MoreHorizIcon sx={{ color: 'rgba(130, 130, 130, 1)' }} />
      </td>
    </tr>
  );
}

export default DataTableRow;
