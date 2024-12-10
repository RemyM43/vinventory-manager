export type Wine = {
  id: string;
  name: string;
  type: 'red' | 'white' | 'rose' | 'sparkling';
  year: number;
  region: string;
  quantity: number;
  price: number;
  purchaseDate: string;
  optimalDate: string;
  notes?: string;
  image?: string;
  rating?: number;
  consumptionHistory?: {
    date: string;
    rating: number;
    notes?: string;
  }[];
};

export type WineStats = {
  totalBottles: number;
  totalValue: number;
  typeDistribution: {
    red: number;
    white: number;
    rose: number;
    sparkling: number;
  };
  averageRating?: number;
  consumedBottles?: number;
};