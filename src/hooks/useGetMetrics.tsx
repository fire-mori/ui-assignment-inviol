import { DashboardMetric } from "../types";
import { useFetch } from "./useFetch";

export function useGetMetrics() {
  const { data, isLoading, error, refetch } =
    useFetch<DashboardMetric[]>("/metrics");
  return {
    metrics: data ?? [],
    isLoading,
    error,
    refetch,
  };
}
