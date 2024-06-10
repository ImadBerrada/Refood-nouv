import { FavorisCreateNestedManyWithoutUtilisateursInput } from "./FavorisCreateNestedManyWithoutUtilisateursInput";

export type UtilisateurCreateInput = {
  adresse?: string | null;
  email?: string | null;
  favorises?: FavorisCreateNestedManyWithoutUtilisateursInput;
  localisation?: string | null;
  motDePasse?: string | null;
  nom?: string | null;
  prNom?: string | null;
  tLPhone?: string | null;
};
