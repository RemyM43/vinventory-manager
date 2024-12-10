import { Wine, WineStats } from './types';

export const mockWines: Wine[] = [
  {
    id: '1',
    name: "Château Margaux",
    type: 'red',
    year: 2015,
    region: 'Bordeaux',
    quantity: 2,
    price: 850,
    purchaseDate: '2020-06-15',
    optimalDate: '2025-01-01',
    notes: 'Premier Grand Cru Classé'
  },
  {
    id: '2',
    name: "Domaine de la Romanée-Conti",
    type: 'red',
    year: 2018,
    region: 'Bourgogne',
    quantity: 1,
    price: 2500,
    purchaseDate: '2021-03-20',
    optimalDate: '2028-01-01'
  },
  {
    id: '3',
    name: "Dom Pérignon",
    type: 'sparkling',
    year: 2012,
    region: 'Champagne',
    quantity: 3,
    price: 250,
    purchaseDate: '2022-12-01',
    optimalDate: '2024-12-31'
  }
];

export const calculateStats = (wines: Wine[]): WineStats => {
  const stats: WineStats = {
    totalBottles: 0,
    totalValue: 0,
    typeDistribution: {
      red: 0,
      white: 0,
      rose: 0,
      sparkling: 0
    }
  };

  wines.forEach(wine => {
    stats.totalBottles += wine.quantity;
    stats.totalValue += wine.price * wine.quantity;
    stats.typeDistribution[wine.type] += wine.quantity;
  });

  return stats;
};