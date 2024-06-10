import { PanierMystereWhereUniqueInput } from "../panierMystere/PanierMystereWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type FavorisCreateInput = {
  panierMystere?: PanierMystereWhereUniqueInput | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
