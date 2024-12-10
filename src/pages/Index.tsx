import { mockWines, calculateStats } from "@/lib/data";
import { Stats } from "@/components/Stats";
import { WineList } from "@/components/WineList";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const stats = calculateStats(mockWines);
  const navigate = useNavigate();

  const handleAddWine = () => {
    navigate('/add-wine');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-gold-light p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-playfair font-bold text-wine">caVino</h1>
          <Button 
            className="bg-wine hover:bg-wine-dark"
            onClick={handleAddWine}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Ajouter un vin
          </Button>
        </div>
        
        <Stats stats={stats} />
        
        <div className="space-y-4">
          <h2 className="text-2xl font-playfair font-semibold text-charcoal">Votre Collection</h2>
          <WineList wines={mockWines} />
        </div>
      </div>
    </div>
  );
};

export default Index;