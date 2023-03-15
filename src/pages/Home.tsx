import Chart from '@/components/Chart';
import useChart from '@/lib/hooks/useChart';
import { useState } from 'react';

const Home = () => {
  const { charts, chartDistrict, start, end } = useChart();
  const [district, setDistrict] = useState('');

  const handleClick = (value: string) => setDistrict(value);

  console.log(charts);

  return (
    <div className="outer">
      <Chart
        data={charts}
        start={start}
        end={end}
        district={district}
        handleClick={handleClick}
      />
      <div className="btn-wrapper">
        <button
          onClick={() => handleClick('')}
          className={`${district === '' ? 'btn-active' : 'btn'}`}
        >
          전체
        </button>
        {chartDistrict.map((value) => (
          <button
            onClick={(e) => handleClick(e.currentTarget.textContent as string)}
            className={`${value === district ? 'btn-active' : 'btn'}`}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
