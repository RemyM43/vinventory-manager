import { WineStats } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wine, GlassWine, Grape } from "lucide-react";

interface StatsProps {
  stats: WineStats;
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3 animate-fade-up">
      <Card className="bg-white/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bottles</CardTitle>
          <Wine className="h-4 w-4 text-wine" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalBottles}</div>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Collection Value</CardTitle>
          <GlassWine className="h-4 w-4 text-wine" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${stats.totalValue.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Red Wines</CardTitle>
          <Grape className="h-4 w-4 text-wine" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.typeDistribution.red}</div>
        </CardContent>
      </Card>
    </div>
  );
};