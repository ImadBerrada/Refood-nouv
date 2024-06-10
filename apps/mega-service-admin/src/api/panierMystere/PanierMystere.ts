import { Favoris } from "../favoris/Favoris";
import { Restaurant } from "../restaurant/Restaurant";

export type PanierMystere = {
  createdAt: Date;
  description: string | null;
  favorises?: Array<Favoris>;
  id: string;
  nom: string | null;
  prix: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
