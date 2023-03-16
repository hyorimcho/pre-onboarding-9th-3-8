import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
  chartDistrict: string[];
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

export interface IDistrictProps {
  chartDistrict: string[];
  district: string;
  handleDistrict: (value: string) => void;
}

export interface ICategoryProps {
  category: string;
  handleCategory: any;
}
