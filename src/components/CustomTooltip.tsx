import { useEffect } from 'react';
import { IProps } from '@/interface/props';

const CustomTooltip = ({ active, payload, setDot }: IProps) => {
  useEffect(() => {
    if (payload && payload.length) setDot(payload[0].payload.id);
  }, [payload]);

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <h3
          className="label"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >{`🚩${payload[0].payload.id}`}</h3>
        <div>
          {payload.map((item) => (
            <div key={item.dataKey} className="tooltip-container">
              <div className="tooltip-inner">
                <div
                  className="tooltip-content-value"
                  // style={{
                  //   color: item.color,
                  // }}
                >
                  {item.value}
                </div>
                <div
                  className="tooltip-content-datakey"
                  style={{ color: item.color }}
                >
                  {item.dataKey}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
