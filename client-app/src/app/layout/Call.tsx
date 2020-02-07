import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import { About } from "../../features/Contraceptions/details/About";

export const Call = () => {
  return (
    <Route>
      

          <Route path ='/' exact component={App}></Route>
          <Route path ='/about' exact component={About}></Route>


      
    </Route>
  );
};
