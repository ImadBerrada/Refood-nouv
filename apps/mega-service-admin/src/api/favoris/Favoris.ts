import { PanierMystere } from "../panierMystere/PanierMystere";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Favoris = {
  createdAt: Date;
  id: string;
  panierMystere?: PanierMystere | null;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
