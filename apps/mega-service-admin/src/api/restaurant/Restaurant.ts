import { PanierMystere } from "../panierMystere/PanierMystere";

export type Restaurant = {
  adresse: string | null;
  coordonnEsGps: string | null;
  createdAt: Date;
  id: string;
  nom: string | null;
  panierMysteres?: Array<PanierMystere>;
  updatedAt: Date;
};
