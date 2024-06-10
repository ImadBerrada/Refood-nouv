import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PaiementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="montant" source="montant" />
        <TextInput label="méthode" source="mThode" />
        <TextInput label="statut" source="statut" />
      </SimpleForm>
    </Edit>
  );
};
