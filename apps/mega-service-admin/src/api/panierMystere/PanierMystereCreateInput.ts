import { FavorisCreateNestedManyWithoutPanierMysteresInput } from "./FavorisCreateNestedManyWithoutPanierMysteresInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PanierMystereCreateInput = {
  description?: string | null;
  favorises?: FavorisCreateNestedManyWithoutPanierMysteresInput;
  nom?: string | null;
  prix?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
