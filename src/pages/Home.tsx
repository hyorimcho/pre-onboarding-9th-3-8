import Chart from '@/components/Chart';
import useChart from '@/lib/hooks/useChart';
import { useState } from 'react';

const Home = () => {
  const { charts, start, end } = useChart();
  const [district, setDistrict] = useState('');

  const handleClick = (value: string) => setDistrict(value);

  return (
    <div className="outer">
      <Chart
        data={charts}
        start={start}
        end={end}
        district={district}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;
