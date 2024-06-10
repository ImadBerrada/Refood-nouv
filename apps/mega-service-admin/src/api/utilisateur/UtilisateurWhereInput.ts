import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavorisListRelationFilter } from "../favoris/FavorisListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UtilisateurWhereInput = {
  adresse?: StringNullableFilter;
  email?: StringNullableFilter;
  favorises?: FavorisListRelationFilter;
  id?: StringFilter;
  localisation?: StringNullableFilter;
  motDePasse?: StringNullableFilter;
  nom?: StringNullableFilter;
  prNom?: StringNullableFilter;
  tLPhone?: StringNullableFilter;
};
