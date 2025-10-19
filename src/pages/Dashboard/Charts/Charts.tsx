import { useState } from "react";
import Card from "../../../components/ui/Card";
import LoadingIcon from "../../../components/ui/Loading";
import { useGetAnalytics } from "../../../hooks/useGetAnalytics";
import Button from "../../../components/ui/Button";
import Chart from "../../../components/ui/Charts/Chart";

export default function Charts() {
  const { analytics, error, isLoading } = useGetAnalytics();
  const [chartType, setChartType] = useState<"Line" | "Bar">("Bar");

  if (isLoading) return <LoadingIcon />;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!analytics?.length)
    return <p className="text-gray-500">No analytics data.</p>;

  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-blue-900">
          Monthly Analytics
        </h2>
        <div className="flex gap-2">
          <Button
            name="Line"
            size="sm"
            variant={chartType === "Line" ? "primary" : "outline"}
            aria-pressed={chartType === "Line"}
            onClick={() => setChartType("Line")}
          >
            Line
          </Button>
          <Button
            name="Bar"
            size="sm"
            variant={chartType === "Bar" ? "primary" : "outline"}
            aria-pressed={chartType === "Bar"}
            onClick={() => setChartType("Bar")}
          >
            Bar
          </Button>
        </div>
      </div>
      <div className="w-full h-80 p-4 bg-white rounded-2xl shadow-md">
        <Chart data={analytics} type={chartType} />
      </div>
    </Card>
  );
}
