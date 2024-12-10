import { Wine } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WineCardProps {
  wine: Wine;
}

export const WineCard = ({ wine }: WineCardProps) => {
  return (
    <Card className="bg-white/50 backdrop-blur hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-playfair">{wine.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{wine.region}, {wine.year}</p>
          </div>
          <Badge variant="outline" className="bg-wine text-white">
            {wine.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <span className="font-medium">{wine.quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Price</span>
            <span className="font-medium">${wine.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Optimal Date</span>
            <span className="font-medium">{new Date(wine.optimalDate).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};