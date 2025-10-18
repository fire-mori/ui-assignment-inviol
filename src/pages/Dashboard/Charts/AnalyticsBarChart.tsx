import { DashboardMetric } from "../../../types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function AnalyticsBarChart({
  analytics,
}: {
  analytics: DashboardMetric[];
}) {
  return (
    <BarChart data={analytics}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
    </BarChart>
  );
}
