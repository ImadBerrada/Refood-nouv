import { FavorisUpdateManyWithoutUtilisateursInput } from "./FavorisUpdateManyWithoutUtilisateursInput";

export type UtilisateurUpdateInput = {
  adresse?: string | null;
  email?: string | null;
  favorises?: FavorisUpdateManyWithoutUtilisateursInput;
  localisation?: string | null;
  motDePasse?: string | null;
  nom?: string | null;
  prNom?: string | null;
  tLPhone?: string | null;
};
