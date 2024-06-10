import { PanierMystereWhereUniqueInput } from "../panierMystere/PanierMystereWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type FavorisUpdateInput = {
  panierMystere?: PanierMystereWhereUniqueInput | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
