import Card from '../../../components/ui/Card';
import LoadingIcon from '../../../components/ui/Loading';
import { useGetAnalytics } from '../../../hooks/useGetAnalytics';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function AnalyticsBarChart() {
  const { analytics, error, isLoading } = useGetAnalytics();

  if (isLoading) return <LoadingIcon />;
  if (error) return <p className="text-red-600">{error}</p>;
  
  return (
    <Card>
      <h2 className="text-lg font-semibold text-blue-900 mb-4">
        Monthly Analytics (Bar)
      </h2>
      <div className="w-full h-80 p-4 bg-white rounded-2xl shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={analytics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
