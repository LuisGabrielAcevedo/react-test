import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import BarSession from "./bar/bar-session";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <BarSession />
        </AppBar>
      </div>
    );
  }
}
