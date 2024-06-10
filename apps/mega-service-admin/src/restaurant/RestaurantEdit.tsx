import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PanierMystereTitle } from "../panierMystere/PanierMystereTitle";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
