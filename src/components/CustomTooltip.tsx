import { TooltipProps } from 'recharts';
import '../../src/index.css';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>): JSX.Element | null => {
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
                  style={{
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>
                <div className="tooltip-content-datakey">{item.dataKey}</div>
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
