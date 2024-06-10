import { StringFilter } from "../../util/StringFilter";
import { PanierMystereWhereUniqueInput } from "../panierMystere/PanierMystereWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type FavorisWhereInput = {
  id?: StringFilter;
  panierMystere?: PanierMystereWhereUniqueInput;
  utilisateur?: UtilisateurWhereUniqueInput;
};
