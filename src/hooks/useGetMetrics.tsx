import { DashboardMetric } from "../types";
import { api, ApiError } from "../utils/api";
import { useEffect, useState } from "react";

export function useGetMetrics() {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMetrics() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.get<DashboardMetric[]>("/metrics");
        setMetrics(data);
      } catch (err) {
        if (err instanceof ApiError) {
          setError(`Error ${err.status}: ${err.message}`);
        } else if (err instanceof DOMException && err.name === "AbortError") {
          // Request was cancelled — do nothing
        } else {
          setError("Unexpected error");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMetrics();

    // Cleanup cancels the request if the component unmounts
    return () => controller.abort();
  }, []);

  return { metrics, isLoading, error, refetch: () => window.location.reload() };
}
