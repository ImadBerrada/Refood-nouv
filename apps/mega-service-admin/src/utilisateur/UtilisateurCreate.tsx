import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FavorisTitle } from "../favoris/FavorisTitle";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
