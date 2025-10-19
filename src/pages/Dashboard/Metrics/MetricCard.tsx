import React from "react";
import Card from "../../../components/ui/Card";
import { DashboardMetric } from "../../../types";

type MetricCardProps = Pick<DashboardMetric, "title" | "value">;

export const MetricCard = React.memo(function MetricCard({
  title,
  value,
}: MetricCardProps) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
      <p className="mt-2 text-2xl font-semibold text-slate-900 tabular-nums">
        {value}
      </p>
    </Card>
  );
});
