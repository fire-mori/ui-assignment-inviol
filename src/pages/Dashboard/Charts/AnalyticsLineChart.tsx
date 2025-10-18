import Card from "../../../components/ui/Card";
import LoadingIcon from "../../../components/ui/Loading";
import { useGetAnalytics } from "../../../hooks/useGetAnalytics";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsLineChart() {
  const { analytics, error, isLoading } = useGetAnalytics();

  if (isLoading) return <LoadingIcon />;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <Card>
      <h2 className="text-lg font-semibold text-blue-900 mb-4">
        Monthly Analytics (Line)
      </h2>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
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
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
