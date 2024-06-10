import { FavorisUpdateManyWithoutPanierMysteresInput } from "./FavorisUpdateManyWithoutPanierMysteresInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PanierMystereUpdateInput = {
  description?: string | null;
  favorises?: FavorisUpdateManyWithoutPanierMysteresInput;
  nom?: string | null;
  prix?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
