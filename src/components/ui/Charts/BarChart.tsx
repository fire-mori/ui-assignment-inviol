import { ChartData } from "../../../types";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CHART_COLOR, GRID, RADIUS } from "./Chart.const";
import { AnalyticsLineChartProps } from "./Chart.types";

export default function BarChart<T extends ChartData>({
  data,
  xKey,
  yKey,
}: AnalyticsLineChartProps<T>) {
  return (
    <RechartsBarChart data={data}>
      <CartesianGrid {...GRID} />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={yKey} fill={CHART_COLOR} radius={RADIUS} />
    </RechartsBarChart>
  );
}
