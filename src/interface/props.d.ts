import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
  district: string;
  handleClick: (value: string) => void;
}

export interface IDotProps {
  cx: number;
  cy: number;
  stroke: string;
  payload: IChart;
  district: string;
}

export interface IProps {
  active: boolean;
  payload: Payload[];
  setDot: Dispatch<React.SetStateAction<string>>;
}
