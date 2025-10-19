import { ChartData } from "../../../types";
import { ResponsiveContainer } from "recharts";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { AnalyticsLineChartProps, ChartType } from "./Chart.types";

export default function Chart<T extends ChartData>({
  data,
  type,
  xKey = "label",
  yKey = "value",
}: AnalyticsLineChartProps<T> & ChartType) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {type === "Line" ? (
        <BarChart data={data} xKey={xKey} yKey={yKey} />
      ) : (
        <LineChart data={data} xKey={xKey} yKey={yKey} />
      )}
    </ResponsiveContainer>
  );
}
