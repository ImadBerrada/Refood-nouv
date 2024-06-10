import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PanierMystereTitle } from "../panierMystere/PanierMystereTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const FavorisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
