import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adresse" source="adresse" />
        <TextField label="coordonnées GPS" source="coordonnEsGps" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nom" source="nom" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PanierMystere"
          target="restaurantId"
          label="PanierMysteres"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="nom" source="nom" />
            <TextField label="prix" source="prix" />
            <ReferenceField
              label="Restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
