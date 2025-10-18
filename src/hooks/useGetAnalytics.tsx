import { DashboardMetric } from '../types';
import { api, ApiError } from '../utils/api';
import { useEffect, useState } from 'react';

export function useGetAnalytics() {
  const [analytics, setAnalytics] = useState<DashboardMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAnalytics() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.get<DashboardMetric[]>("/analytics");
        setAnalytics(data);
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

    fetchAnalytics();

    // Cleanup cancels the request if the component unmounts
    return () => controller.abort();
  }, []);

  return {
    analytics,
    isLoading,
    error,
    refetch: () => window.location.reload(),
  };
}
