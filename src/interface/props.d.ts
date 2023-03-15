import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
  district: string;
  handleClick: (value: string) => void;
}
