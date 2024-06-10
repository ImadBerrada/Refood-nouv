import { PanierMystereCreateNestedManyWithoutRestaurantsInput } from "./PanierMystereCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  adresse?: string | null;
  coordonnEsGps?: string | null;
  nom?: string | null;
  panierMysteres?: PanierMystereCreateNestedManyWithoutRestaurantsInput;
};
