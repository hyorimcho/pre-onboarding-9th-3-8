export interface IData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IChart extends IData {
  date: string;
}

export type Category = '전체' | 'area' | 'bar';
