import { Paiement as TPaiement } from "../api/paiement/Paiement";

export const PAIEMENT_TITLE_FIELD = "mThode";

export const PaiementTitle = (record: TPaiement): string => {
  return record.mThode?.toString() || String(record.id);
};
