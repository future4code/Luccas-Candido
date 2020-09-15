import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApplicationFormPage from "../screens/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage";
import HomePage from "../screens/HomePage/HomePage";
import ListTripPage from "../screens/ListTripPage/ListTripPage";
import LoginPage from "../screens/LoginPage/LoginPage";
import TripDetailsPage from "../screens/TripDetailsPage/TripDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripPage />
        </Route>

        <Route exact path="/trips/create ">
          <CreateTripPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
