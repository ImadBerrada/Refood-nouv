import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaiementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Paiements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="montant" source="montant" />
        <TextField label="méthode" source="mThode" />
        <TextField label="statut" source="statut" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
