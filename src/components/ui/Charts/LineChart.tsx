import { ChartData } from "../../../types";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CHART_COLOR, GRID } from "./Chart.const";
import { AnalyticsLineChartProps } from "./Chart.types";

export default function LineChart<T extends ChartData>({
  data,
  xKey,
  yKey,
}: AnalyticsLineChartProps<T>) {
  return (
    <RechartsLineChart data={data}>
      <CartesianGrid {...GRID} />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey={yKey}
        stroke={CHART_COLOR}
        strokeWidth={3}
        dot={{ r: 5 }}
        activeDot={{ r: 7 }}
      />
    </RechartsLineChart>
  );
}
