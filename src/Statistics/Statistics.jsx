// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";


const Statistics = () => {
  const [totalData, setTotalData] = useState([]);
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => setTotalData(data))

    const localStorageData = JSON.parse(localStorage.getItem("donate"));
    // console.log(localStorageData)
    if (localStorageData) {
      setLocalStorageData(localStorageData);
    }
  }, [])

  

  const data = [
      { name: 'Group A', value: totalData.length},
      { name: 'Group B', value: localStorageData.length },

    ];


  //   console.log(totalData);


  // const totalJsonValue = totalData.reduce((total, item) => total + item.value, 0 );
  // console.log(totalJsonValue);
  // const totalValue = totalJsonValue + localStorageData.filter((total, item) => total + item.value, 0);
  // console.log(totalValue)
  // const combinedData = [...totalData, ...localStorageData];
  // console.log(combinedData)
  // const dataWithPercentage = combinedData.map((entry) => ({
  //   ...entry,
    
  //   percentage: (entry.value / totalValue) * 100
    
  // }));
  
  const COLORS = ['#FF444A', '#00C49F'];


  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="h-[500px] ">

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={800}>
          <Pie

            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center items-center gap-10 ">
        <div className="flex justify-center items-center gap-2">
          <h1>Your Donation</h1>
          <div className="bg-[#00C49F] w-[100px] h-[12px] "></div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h1>Total Donation</h1>
          <div className="bg-[#FF444A] w-[100px] h-[12px] "></div>
        </div>

      </div>

    </div>
  );
};

export default Statistics;