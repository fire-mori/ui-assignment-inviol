import LoadingIcon from '../../../components/ui/Loading';
import Card from '../../../components/ui/Card';
import { useGetMetrics } from '../../../hooks/useGetMetrics';

export default function Metrics() {
  const { metrics, error, isLoading } = useGetMetrics();

  if (isLoading) return <LoadingIcon />;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.id}>
            <h2 className="text-lg font-semibold text-blue-900">
              {metric.title}
            </h2>
            <p className="mt-4 text-gray-600">{metric.value}</p>
          </Card>
        ))}      
      </div>  
   </div>
  );
}
