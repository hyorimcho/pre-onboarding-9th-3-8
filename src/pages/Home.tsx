import apiClient from '@/api/index';
import CustomTooltip from '@/components/CustomTooltip';
import '../index.css';
import { IData } from '@/interface/data';
import { useState, useEffect } from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Home = () => {
  const [chartData, setChartData] = useState<IData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await apiClient({ method: 'get' });
      const objectData = data.response;
      const chartArr = [];
      for (const key in objectData) {
        chartArr.push({
          time: new Date(key).toLocaleTimeString().replace('오후', ''),
          ...objectData[key],
        });
        setChartData(chartArr);
      }
    };
    getData();
  }, []);

  return (
    <div className="chart-container">
      <h1>Chart</h1>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={600}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="gray" strokeDasharray="5 5" />
          <XAxis dataKey="time" scale="band" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={50} />
          <Bar dataKey="value_bar" barSize={20} yAxisId="right" fill="pink" />
          <Area
            type="monotone"
            dataKey="value_area"
            fill="#8884d8"
            stroke="#8884d8"
            yAxisId="left"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Home;
