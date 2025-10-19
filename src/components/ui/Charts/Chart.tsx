import { ChartData } from "../../../types";
import { ResponsiveContainer } from "recharts";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

type AnalyticsLineChartProps<T extends ChartData> = {
  data: T[];
  type: "Line" | "Bar";
  xKey?: keyof ChartData;
  yKey?: keyof ChartData;
};

export default function Chart<T extends ChartData>({
  data,
  type,
}: AnalyticsLineChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {type === "Line" ? <BarChart data={data} /> : <LineChart data={data} />}
    </ResponsiveContainer>
  );
}
