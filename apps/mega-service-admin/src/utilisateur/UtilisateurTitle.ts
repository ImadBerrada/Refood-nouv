import { Utilisateur as TUtilisateur } from "../api/utilisateur/Utilisateur";

export const UTILISATEUR_TITLE_FIELD = "adresse";

export const UtilisateurTitle = (record: TUtilisateur): string => {
  return record.adresse?.toString() || String(record.id);
};
