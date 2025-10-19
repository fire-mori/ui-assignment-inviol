import { ChartData } from "../../../types";

export type AnalyticsLineChartProps<T extends ChartData> = {
  data: T[];
  xKey?: keyof ChartData;
  yKey?: keyof ChartData;
};

export type ChartType = {
  type: "Line" | "Bar";
};
