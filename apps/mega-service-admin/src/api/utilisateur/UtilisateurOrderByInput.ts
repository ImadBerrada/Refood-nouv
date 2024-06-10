import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  adresse?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  localisation?: SortOrder;
  motDePasse?: SortOrder;
  nom?: SortOrder;
  prNom?: SortOrder;
  tLPhone?: SortOrder;
  updatedAt?: SortOrder;
};
