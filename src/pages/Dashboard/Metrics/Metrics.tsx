import React, { useMemo } from "react";
import { useGetMetrics } from "../../../hooks/useGetMetrics";
import { MetricCard } from "./MetricCard";
import { DashboardMetric } from "../../../types";
import { SkeletonCard } from "./SceletonCard";
import Card from "../../../components/ui/Card";

function Metrics() {
  const { metrics, isLoading, error } = useGetMetrics();

  const hasData = Boolean(metrics?.length > 0);

  const normalized: Pick<DashboardMetric, "title" | "value" | "id">[] =
    useMemo(() => {
      const data = metrics ?? [];
      return data.map(({ id, title, value }) => ({
        id,
        title: title ?? "—",
        value: value ?? "—",
      }));
    }, [metrics]);

  return (
    <div className="grid grid-cols-1 gap-6">
      {!isLoading && error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {!isLoading && !error && !hasData && (
          <Card>
            <p className="text-sm text-gray-500">No analytics data.</p>
          </Card>
        )}
        {isLoading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
        {!isLoading &&
          !error &&
          hasData &&
          normalized.map(({ id, title, value }) => (
            <MetricCard key={id} title={title} value={value} />
          ))}
      </div>
    </div>
  );
}

export default React.memo(Metrics);
