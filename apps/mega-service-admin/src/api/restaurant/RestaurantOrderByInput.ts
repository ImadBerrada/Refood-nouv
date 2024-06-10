import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  adresse?: SortOrder;
  coordonnEsGps?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  updatedAt?: SortOrder;
};
