import { Wine } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Wine as WineIcon } from "lucide-react";

interface WineCardProps {
  wine: Wine;
}

const typeTranslations = {
  red: "Rouge",
  white: "Blanc",
  rose: "Rosé",
  sparkling: "Pétillant"
};

export const WineCard = ({ wine }: WineCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card 
        className="bg-white/50 backdrop-blur hover:shadow-lg transition-shadow cursor-pointer" 
        onClick={() => setShowDetails(true)}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-playfair">{wine.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{wine.region}, {wine.year}</p>
            </div>
            <Badge variant="outline" className="bg-wine text-white">
              {typeTranslations[wine.type]}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Quantité</span>
              <span className="font-medium">{wine.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Prix</span>
              <span className="font-medium">{wine.price}€</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Date optimale</span>
              <span className="font-medium">
                {new Date(wine.optimalDate).toLocaleDateString('fr-FR')}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <WineIcon className="h-6 w-6 text-wine" />
              <span>{wine.name}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Détails du vin</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium">{typeTranslations[wine.type]}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Région</dt>
                    <dd className="font-medium">{wine.region}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Millésime</dt>
                    <dd className="font-medium">{wine.year}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Prix</dt>
                    <dd className="font-medium">{wine.price}€</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Quantité</dt>
                    <dd className="font-medium">{wine.quantity}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Dates importantes</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Date d'achat</dt>
                    <dd className="font-medium">
                      {new Date(wine.purchaseDate).toLocaleDateString('fr-FR')}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Date optimale de dégustation</dt>
                    <dd className="font-medium">
                      {new Date(wine.optimalDate).toLocaleDateString('fr-FR')}
                    </dd>
                  </div>
                </dl>
              </div>

              {wine.notes && (
                <div>
                  <h3 className="font-semibold mb-2">Notes</h3>
                  <p className="text-muted-foreground">{wine.notes}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt={`Étiquette de ${wine.name}`}
                className="max-w-full h-auto rounded-md shadow-md"
              />
              <p className="mt-2 text-sm text-muted-foreground">Étiquette du vin</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};