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
};