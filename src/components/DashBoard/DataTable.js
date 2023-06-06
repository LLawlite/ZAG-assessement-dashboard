import React, { useEffect, useState } from 'react';
import '../../styles/DataTable.css';
import SearchIcon from '@mui/icons-material/Search';
import DataTableRow from './DataTableRow';
import ActiveOrderSelector from './ActiveOrderSelector';
import AmountSelector from './AmountSelector';
import Placeon from './Placeon';
import Options from './Options';
import orderData from '../../data/ordersData';

export default function DataTable({
  orderType,
  setOrderType,
  orderSum,
  setOrderSum,
}) {
  // for the amount filter
  const [amountRange, setAmountRange] = useState(0);

  const [filteredData, setFilteredData] = useState([]);

  //applying fileter based on orderType and amountRange
  useEffect(() => {
    const filteredByAmount = orderData.filter((item) => {
      if (amountRange === 0) {
        return true; // Select all elements without considering the amount range
      } else if (amountRange === 1 && item.amount < 500) {
        return true;
      } else if (
        amountRange === 2 &&
        item.amount >= 500 &&
        item.amount <= 1000
      ) {
        return true;
      } else if (
        amountRange === 3 &&
        item.amount > 1000 &&
        item.amount <= 2000
      ) {
        return true;
      } else if (amountRange === 4 && item.amount > 2000) {
        return true;
      }
      return false;
    });

    // Filter by order type
    const filteredByOrderType = filteredByAmount.filter((item) => {
      if (orderType === 0) {
        return true; // Select all elements without considering the order type
      } else if (orderType === 1 && item.confirmed) {
        return true;
      } else if (orderType === 2 && item.delivered) {
        return true;
      } else if (orderType === 3 && item.refund) {
        return true;
      } else if (orderType === 4 && item.pending) {
        return true;
      }
      return false;
    });

    // Calculate sum based on order type
    let sumOrderType = 0;
    if (orderType === 0) {
      sumOrderType = filteredByOrderType.reduce(
        (sum, item) => sum + item.confirmed,
        0
      );
    } else {
      sumOrderType = filteredByOrderType.reduce((sum, item) => {
        let orderAmount = 0;
        if (orderType === 1) {
          orderAmount = item.confirmed;
        } else if (orderType === 2) {
          orderAmount = item.delivered;
        } else if (orderType === 3) {
          orderAmount = item.refund;
        } else if (orderType === 4) {
          orderAmount = item.pending;
        }
        return sum + orderAmount;
      }, 0);
    }

    setOrderSum(sumOrderType);
    setFilteredData(filteredByOrderType);
  }, [orderType, amountRange]);

  return (
    <table className="data-table">
      <tr>
        <th className="icon-column">
          <SearchIcon />
        </th>
        <th className="company-name-column">Search</th>
        <th className="active-orders-column">
          <ActiveOrderSelector
            orderType={orderType}
            setOrderType={setOrderType}
          />
        </th>
        <th className="amount-column">
          <AmountSelector
            amountRange={amountRange}
            setAmountRange={setAmountRange}
          />
        </th>
        <th className="placedon-column">
          <Placeon />
        </th>
        <th className="option-column">
          <Options />
        </th>
      </tr>

      {filteredData.length === 0 ? (
        <tr>
          <td colSpan="6">No data found.</td>
        </tr>
      ) : (
        filteredData.map((item, idx) => (
          <DataTableRow
            data={item}
            key={idx}
            orderType={orderType}
            setOrderType={setOrderType}
            orderSum={orderSum}
            setOrderSum={orderSum}
          />
        ))
      )}
    </table>
  );
}
