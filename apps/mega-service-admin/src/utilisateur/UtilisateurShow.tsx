import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PANIERMYSTERE_TITLE_FIELD } from "../panierMystere/PanierMystereTitle";
import { UTILISATEUR_TITLE_FIELD } from "./UtilisateurTitle";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adresse" source="adresse" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="localisation" source="localisation" />
        <TextField label="mot de passe" source="motDePasse" />
        <TextField label="nom" source="nom" />
        <TextField label="prénom" source="prNom" />
        <TextField label="téléphone" source="tLPhone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Favoris"
          target="utilisateurId"
          label="Favorises"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PanierMystere"
              source="paniermystere.id"
              reference="PanierMystere"
            >
              <TextField source={PANIERMYSTERE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Utilisateur"
              source="utilisateur.id"
              reference="Utilisateur"
            >
              <TextField source={UTILISATEUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
