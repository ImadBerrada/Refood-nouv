import { Favoris as TFavoris } from "../api/favoris/Favoris";

export const FAVORIS_TITLE_FIELD = "id";

export const FavorisTitle = (record: TFavoris): string => {
  return record.id?.toString() || String(record.id);
};
