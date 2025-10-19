import { ChartData } from "../../../types";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function BarChart({ data }: { data: ChartData[] }) {
  return (
    <RechartsBarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
    </RechartsBarChart>
  );
}
