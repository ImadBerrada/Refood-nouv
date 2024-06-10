import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PanierMystereTitle } from "../panierMystere/PanierMystereTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const FavorisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="panierMystere.id"
          reference="PanierMystere"
          label="PanierMystere"
        >
          <SelectInput optionText={PanierMystereTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="Utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
