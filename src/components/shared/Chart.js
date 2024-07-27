import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
const Chart = ({ data }) => (
    <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
)
 Chart.propTypes = {
     data: PropTypes.arrayOf(PropTypes.shape({
         name: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired
     })).isRequired
 }
 Chart.defaultProps = {
     data: []
 }
 export default Chart