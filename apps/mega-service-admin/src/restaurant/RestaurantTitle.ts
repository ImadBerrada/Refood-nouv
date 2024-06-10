import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "adresse";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.adresse?.toString() || String(record.id);
};
