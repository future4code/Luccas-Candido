import React from "react";

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import ApplicationFormPage from "../screens/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage";
import HomePage from "../screens/HomePage/HomePage";
import ListTripPage from "../screens/ListTripPage/ListTripPage";
import LoginPage from "../screens/LoginPage/LoginPage";
import TripDetailsPage from "../screens/TripDetailsPage/TripDetailsPage";
import AdmPanel from "../screens/AdmPanel.js/AdmPanel";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/trips/list/:id">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/trips/details/:id">
          <TripDetailsPage />
        </Route>

        <Route exact path="/trips/list/">
          <ListTripPage />
        </Route>

        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>

        <Route exact path="/panel">
          <AdmPanel />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
