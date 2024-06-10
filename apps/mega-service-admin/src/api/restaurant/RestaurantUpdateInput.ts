import { PanierMystereUpdateManyWithoutRestaurantsInput } from "./PanierMystereUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  adresse?: string | null;
  coordonnEsGps?: string | null;
  nom?: string | null;
  panierMysteres?: PanierMystereUpdateManyWithoutRestaurantsInput;
};
