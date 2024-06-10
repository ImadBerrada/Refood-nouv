import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { FavorisList } from "./favoris/FavorisList";
import { FavorisCreate } from "./favoris/FavorisCreate";
import { FavorisEdit } from "./favoris/FavorisEdit";
import { FavorisShow } from "./favoris/FavorisShow";
import { PanierMystereList } from "./panierMystere/PanierMystereList";
import { PanierMystereCreate } from "./panierMystere/PanierMystereCreate";
import { PanierMystereEdit } from "./panierMystere/PanierMystereEdit";
import { PanierMystereShow } from "./panierMystere/PanierMystereShow";
import { PaiementList } from "./paiement/PaiementList";
import { PaiementCreate } from "./paiement/PaiementCreate";
import { PaiementEdit } from "./paiement/PaiementEdit";
import { PaiementShow } from "./paiement/PaiementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MegaService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Favoris"
          list={FavorisList}
          edit={FavorisEdit}
          create={FavorisCreate}
          show={FavorisShow}
        />
        <Resource
          name="PanierMystere"
          list={PanierMystereList}
          edit={PanierMystereEdit}
          create={PanierMystereCreate}
          show={PanierMystereShow}
        />
        <Resource
          name="Paiement"
          list={PaiementList}
          edit={PaiementEdit}
          create={PaiementCreate}
          show={PaiementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
