import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PanierMystereTitle } from "../panierMystere/PanierMystereTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adresse" source="adresse" />
        <TextInput label="coordonnées GPS" source="coordonnEsGps" />
        <TextInput label="nom" source="nom" />
        <ReferenceArrayInput
          source="panierMysteres"
          reference="PanierMystere"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PanierMystereTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
