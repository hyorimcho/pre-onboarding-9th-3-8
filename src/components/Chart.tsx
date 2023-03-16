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
import { useEffect, useState } from 'react';
import { Color } from '@/constants/colors';
import CustomizedDot from './CustomizedDot';
import DistrictBtn from './DistrictBtn';
import CategoryBtn from './CategoryBtn';
import { Category } from '@/interface/chartData';
import { useSearchParams } from 'react-router-dom';

const Chart = ({ data, start, end, chartDistrict }: IChartProps) => {
  const [dot, setDot] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const district = searchParams.get('district') as string;
  const category = searchParams.get('category') as Category;

  useEffect(() => {
    if (!district && !category) {
      searchParams.set('district', '전체');
      searchParams.set('category', '전체');
    }
  }, []);

  const handleDistrict = (value: string) => {
    setSearchParams({ category, district: value });
  };

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchParams({
      category: e.currentTarget.textContent as Category,
      district,
    });
  };

  return (
    <>
      <h1>{district && category ? district : '전체'}</h1>
      <h3>{`${start} ~ ${end}`}</h3>
      <CategoryBtn category={category} handleCategory={handleCategory} />
      <DistrictBtn
        district={district}
        chartDistrict={chartDistrict}
        handleDistrict={handleDistrict}
      />
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
                onClick={(e) => handleDistrict(e.id)}
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
                  handleDistrict(dot);
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
