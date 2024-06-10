export type Paiement = {
  createdAt: Date;
  id: string;
  montant: number | null;
  mThode: string | null;
  statut: string | null;
  updatedAt: Date;
};
