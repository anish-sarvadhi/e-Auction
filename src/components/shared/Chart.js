import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  // Extract unique user IDs from the data
  const userIds = [...new Set(data.flatMap(item => Object.keys(item).filter(key => key !== 'name')))];
  
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {userIds.map((userId, index) => (
            <Line
              key={userId}
              type="monotone"
              dataKey={userId}
              stroke={index === 0 ? "#8884d8" : "#82ca9d"}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    // Define PropTypes for each user's bid data
    user1: PropTypes.number, // Adjust the type based on your data structure
    user2: PropTypes.number  // Adjust the type based on your data structure
  })).isRequired
};

Chart.defaultProps = {
  data: []
};

export default Chart;
