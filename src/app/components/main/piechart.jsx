import React, { memo } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const Piechart = memo(function Piechart({ data, colors }) {
  return (
    <ResponsiveContainer width="100%" height={205}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="rgba(0,0,0,0)"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
});

export default Piechart;
