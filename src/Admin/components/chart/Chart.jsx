import "./chart.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label, targetAmount }) => {
  if (active && payload && payload.length) {
    const actualCost = payload[0].value;
    const difference = targetAmount - actualCost;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${actualCost}`}</p>
        <p className="intro">{`Target: ${targetAmount}, Difference: ${difference}`}</p>
      </div>
    );
  }

  return null;
};

const Chart = ({ targetAmount }) => {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8079/carts/orders');
        setFormData(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const last7DaysDates = Array.from({ length: 7 }, (_, i) =>
    moment().subtract(i, 'days').format('YYYY-MM-DD')
  );

  const filteredData = last7DaysDates.map(date => {
    const totalCostForDate = formData
      .filter(order => moment(order.orderbookingtime).format('YYYY-MM-DD') === date)
      .reduce((total, order) => total + order.totalSum, 0);
    return { date, cost: totalCostForDate };
  });

  return (
    <div className="chart">
      <div className="title">Last 7 Days Chart</div>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={730}
          height={250}
          data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip content={<CustomTooltip targetAmount={targetAmount} />} />
          <Area
            type="monotone"
            dataKey="cost"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.defaultProps = {
  targetAmount: 10000,
};

export default Chart;
