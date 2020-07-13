import React, { useEffect } from "react";
import "./App.css";
import PropertyList from "./components/views/property-list";
import NavBar from "./components/layout/nav-bar";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, MuiThemeProvider } from "./material-ui";
import Register from "./components/security/register";
import Login from "./components/security/login";
import { FirebaseContext } from "./server";

function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [logged, setLogged] = React.useState(false);

  useEffect(() => {
    firebase.isLogged().then((resp) => {
      setLogged(true);
    })
  });

  return logged  ? (
    <Router>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Grid container>
          <Switch>
            <Route path="/" exact component={PropertyList} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/login" exact component={Login} />
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  ): null;
}

export default App;
