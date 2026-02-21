export type CarAuction = {
  id: string;
  make: string;
  model: string;
  year: number;
  currentBid: number;
  endsAt: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};
