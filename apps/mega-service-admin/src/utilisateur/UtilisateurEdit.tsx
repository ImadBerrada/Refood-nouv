import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FavorisTitle } from "../favoris/FavorisTitle";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adresse" source="adresse" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="favorises"
          reference="Favoris"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavorisTitle} />
        </ReferenceArrayInput>
        <TextInput label="localisation" source="localisation" />
        <TextInput label="mot de passe" source="motDePasse" />
        <TextInput label="nom" source="nom" />
        <TextInput label="prénom" source="prNom" />
        <TextInput label="téléphone" source="tLPhone" />
      </SimpleForm>
    </Edit>
  );
};
