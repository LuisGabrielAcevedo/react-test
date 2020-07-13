import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class PropertyList extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </div>
    );
  }
}
