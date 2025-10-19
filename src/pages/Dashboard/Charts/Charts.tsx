import { useCallback, useMemo, useState } from "react";
import Card from "../../../components/ui/Card";
import LoadingIcon from "../../../components/ui/Loading";
import { useGetAnalytics } from "../../../hooks/useGetAnalytics";
import Button from "../../../components/ui/Button";
import Chart from "../../../components/ui/Charts/Chart";
import React from "react";

function Charts() {
  const { analytics, error, isLoading } = useGetAnalytics();
  const [chartType, setChartType] = useState<"Line" | "Bar">("Bar");

  const hasData = Boolean(analytics?.length > 0);

  // Stable handlers so Button children don’t re-render unnecessarily
  const setLine = useCallback(() => setChartType("Line"), []);
  const setBar = useCallback(() => setChartType("Bar"), []);

  // Memoize props
  const chartProps = useMemo(
    () => ({
      data: analytics ?? [],
      type: chartType,
    }),
    [analytics, chartType]
  );

  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-blue-600">
          Monthly Analytics
        </h2>
        <div role="radiogroup" aria-label="Chart type" className="flex gap-2">
          <Button
            name="Line"
            size="sm"
            role="radio"
            variant={chartType === "Line" ? "primary" : "outline"}
            aria-pressed={chartType === "Line"}
            onClick={setLine}
            disabled={!hasData || isLoading}
          >
            Line
          </Button>
          <Button
            name="Bar"
            size="sm"
            role="radio"
            variant={chartType === "Bar" ? "primary" : "outline"}
            aria-pressed={chartType === "Bar"}
            onClick={setBar}
            disabled={!hasData || isLoading}
          >
            Bar
          </Button>
        </div>
      </div>
      <div className="w-full h-80 p-4 bg-white ">
        {isLoading && (
          <div className="flex h-full w-full items-center justify-center">
            <LoadingIcon />
          </div>
        )}
        {!isLoading && error && <p className="text-sm text-red-600">{error}</p>}
        {!isLoading && !error && !hasData && (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-sm text-gray-500">No analytics data.</p>
          </div>
        )}
        {!isLoading && !error && hasData && <Chart {...chartProps} />}
      </div>
    </Card>
  );
}

export default React.memo(Charts);
