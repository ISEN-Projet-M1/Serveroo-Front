import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import Test from './pages/test/Test';
import Product from './pages/product/Product';
import Profile from './pages/profile/Profile';
import Factures from './pages/factures/Factures';
import Services from './pages/services/Services';
import Commandes from './pages/commandes/Commandes';
import Serveur from './pages/serveur/Serveur';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import React from "react";

import './i18n';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/factures">
            <Factures />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/commandes">
            <Commandes />
          </Route>
          <Route exact path="/serveur">
            <Serveur />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
);

export default App;
