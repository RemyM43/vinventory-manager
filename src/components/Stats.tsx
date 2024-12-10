import { WineStats } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wine, Grape } from "lucide-react";

interface StatsProps {
  stats: WineStats;
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3 animate-fade-up">
      <Card className="bg-white/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bouteilles</CardTitle>
          <Wine className="h-4 w-4 text-wine" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalBottles}</div>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valeur Collection</CardTitle>
          <Wine className="h-4 w-4 text-wine" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats.totalValue.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Vins Rouges</CardTitle>
          <Grape className="h-4 w-4 text-wine" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.typeDistribution.red}</div>
        </CardContent>
      </Card>
    </div>
  );
};