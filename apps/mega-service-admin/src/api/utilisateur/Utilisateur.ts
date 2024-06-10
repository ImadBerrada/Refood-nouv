import { Favoris } from "../favoris/Favoris";

export type Utilisateur = {
  adresse: string | null;
  createdAt: Date;
  email: string | null;
  favorises?: Array<Favoris>;
  id: string;
  localisation: string | null;
  motDePasse: string | null;
  nom: string | null;
  prNom: string | null;
  tLPhone: string | null;
  updatedAt: Date;
};
