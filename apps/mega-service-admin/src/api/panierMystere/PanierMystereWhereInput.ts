import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavorisListRelationFilter } from "../favoris/FavorisListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PanierMystereWhereInput = {
  description?: StringNullableFilter;
  favorises?: FavorisListRelationFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
  prix?: FloatNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
