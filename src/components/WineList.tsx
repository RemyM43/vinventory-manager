import { Wine } from "@/lib/types";
import { WineCard } from "./WineCard";

interface WineListProps {
  wines: Wine[];
}

export const WineList = ({ wines }: WineListProps) => {
  if (wines.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Aucun vin dans votre collection. Commencez par en ajouter un !
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-fade-up">
      {wines.map((wine) => (
        <WineCard key={wine.id} wine={wine} />
      ))}
    </div>
  );
};