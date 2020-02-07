import React, { Fragment, useEffect, useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { NavBar } from "../../nav/NavBar";
import { IContraception } from "../../../app/models/contraception";
import { Navabout } from "./Navabout";
interface IState {
  contraceptions: IContraception[];
}

export const About = () => {
  return (
    <Fragment>
      <Navabout />

      <Container style={{ marginTop: "15em" }}>
        <p style={{ fontFamily: "Al Nile", fontSize: 20 }}>
          Dataset:https://archive.ics.uci.edu/ml/datasets/Contraceptive+Method+Choice
          <br></br> <br></br>
          This dataset is a subset of the 1987 National Indonesia Contraceptive
          Prevalence Survey. The samples are married women who were either not
          pregnant or do not know if they were at the time of interview. The
          problem is to predict the current contraceptive method choice (no use,
          long-term methods, or short-term methods) of a woman based on her
          demographic and socio-economic characteristics.
        </p>

        <p style={{ marginTop: "10em",fontFamily: "Al Nile", fontSize: 20,fontWeight:"bold" }}>
          Made by: Marko Grubeša, Predrag Duvnjak, 2020
        </p>
      </Container>
    </Fragment>
  );
};
