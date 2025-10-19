import Card from "../../../components/ui/Card";

export const SkeletonCard = () => (
  <Card>
    <div className="h-4 w-24 rounded bg-slate-200 animate-pulse" />
    <div className="mt-3 h-7 w-32 rounded bg-slate-200 animate-pulse" />
  </Card>
);
