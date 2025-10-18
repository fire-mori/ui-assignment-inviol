import { DashboardMetric } from "@/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function AnalyticsLineChart({
  analytics,
}: {
  analytics: DashboardMetric[];
}) {
  return (
    <LineChart data={analytics}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#3b82f6"
        strokeWidth={3}
        dot={{ r: 5 }}
        activeDot={{ r: 7 }}
      />
    </LineChart>
  );
}
