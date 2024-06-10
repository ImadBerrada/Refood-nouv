import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PanierMystereListRelationFilter } from "../panierMystere/PanierMystereListRelationFilter";

export type RestaurantWhereInput = {
  adresse?: StringNullableFilter;
  coordonnEsGps?: StringNullableFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
  panierMysteres?: PanierMystereListRelationFilter;
};
