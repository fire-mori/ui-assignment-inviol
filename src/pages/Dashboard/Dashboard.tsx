import Metrics from './Metrics/Metrics'

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Key metrics
        </p>
      </div>
      <Metrics />
    </div>
  )
}
