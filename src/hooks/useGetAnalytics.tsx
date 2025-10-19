import { ChartData } from "../types";
import { useFetch } from "./useFetch";

export function useGetAnalytics() {
  const { data, isLoading, error, refetch } =
    useFetch<ChartData[]>("/analytics");
  return {
    analytics: data ?? [],
    isLoading,
    error,
    refetch,
  };
}
