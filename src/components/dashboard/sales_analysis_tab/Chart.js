import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = (props) => {
  const data = []
  console.log(props.dataForChart)
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  props.dataForChart.forEach((item,index)=>data.push({"month":month[index],"sales":item.policies}))
  return (
        <LineChart width={600} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>S
       <XAxis dataKey="month" />
          <YAxis dataKey="sales" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="month" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
  )

}

export default Chart