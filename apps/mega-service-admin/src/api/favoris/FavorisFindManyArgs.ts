import { FavorisWhereInput } from "./FavorisWhereInput";
import { FavorisOrderByInput } from "./FavorisOrderByInput";

export type FavorisFindManyArgs = {
  where?: FavorisWhereInput;
  orderBy?: Array<FavorisOrderByInput>;
  skip?: number;
  take?: number;
};
