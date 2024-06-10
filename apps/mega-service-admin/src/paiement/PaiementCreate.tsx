import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PaiementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="montant" source="montant" />
        <TextInput label="méthode" source="mThode" />
        <TextInput label="statut" source="statut" />
      </SimpleForm>
    </Create>
  );
};
