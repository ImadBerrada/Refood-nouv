import { SortOrder } from "../../util/SortOrder";

export type PaiementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  montant?: SortOrder;
  mThode?: SortOrder;
  statut?: SortOrder;
  updatedAt?: SortOrder;
};
