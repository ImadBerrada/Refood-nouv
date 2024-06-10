import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaiementWhereInput = {
  id?: StringFilter;
  montant?: FloatNullableFilter;
  mThode?: StringNullableFilter;
  statut?: StringNullableFilter;
};
