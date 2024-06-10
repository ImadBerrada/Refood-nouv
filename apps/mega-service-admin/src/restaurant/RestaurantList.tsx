import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Restaurants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="adresse" source="adresse" />
        <TextField label="coordonnées GPS" source="coordonnEsGps" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nom" source="nom" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
