import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltip';
import { IChartProps } from '@/interface/props';
import { useState } from 'react';
import { Color } from '@/constants/colors';
import CustomizedDot from './CustomizedDot';

type Category = '전체' | 'area' | 'bar';
const CATEGORY: Category[] = ['전체', 'area', 'bar'];

const Chart = ({ data, start, end, district, handleClick }: IChartProps) => {
  const [category, setCategory] = useState<Category>('전체');
  const [dot, setDot] = useState('');
  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.textContent as Category);
  };
  return (
    <>
      <h1>{`${start} ~ ${end}`}</h1>
      <div className="btn-wrapper">
        {CATEGORY.map((item) => (
          <button
            className={`${item === category ? 'btn-active' : 'btn'}`}
            key={item}
            onClick={handleClickCategory}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              label={{ value: 'value_bar', position: 'top', offset: 20 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 150]}
              label={{ value: 'value_area', position: 'top', offset: 20 }}
            />
            <Tooltip
              content={
                <CustomTooltip active={false} payload={[]} setDot={setDot} />
              }
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend />
            {category === '전체' || category === 'bar' ? (
              <Bar
                dataKey="value_bar"
                barSize={20}
                fill={Color.PALEPINK}
                yAxisId="right"
                onClick={(data) => handleClick(data.id)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`${
                      entry.id === district ? Color.PINK : Color.PALEPINK
                    }`}
                  />
                ))}
              </Bar>
            ) : null}
            {category === '전체' || category === 'area' ? (
              <Area
                type="monotone"
                dataKey="value_area"
                fill={Color.INDIGO}
                stroke={Color.INDIGO}
                yAxisId="left"
                onClick={() => {
                  handleClick(dot);
                }}
                dot={
                  <CustomizedDot
                    cx={0}
                    cy={0}
                    stroke={Color.YELLOW}
                    district={district}
                    payload={{ id: '', value_area: 0, value_bar: 0, date: '' }}
                  />
                }
              />
            ) : null}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
