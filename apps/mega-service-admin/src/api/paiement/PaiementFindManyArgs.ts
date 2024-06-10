import { PaiementWhereInput } from "./PaiementWhereInput";
import { PaiementOrderByInput } from "./PaiementOrderByInput";

export type PaiementFindManyArgs = {
  where?: PaiementWhereInput;
  orderBy?: Array<PaiementOrderByInput>;
  skip?: number;
  take?: number;
};
