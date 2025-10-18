import Metrics from "./Metrics/Metrics";
import Charts from "./Charts/Charts";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Key metrics</p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Metrics />
        <Charts />
      </div>
    </div>
  );
}
