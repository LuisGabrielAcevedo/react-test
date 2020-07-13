import React, { Component } from "react";
import { Container, Avatar } from "src/material-ui";
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
import { Typography, Grid, TextField, Button } from "src/material-ui";
import { compose } from "recompose";
import { consumerFirebase } from "src/server";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  button: {
    marginTop: 15,
    marginBottom: 20,
  },
};

const initUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

class Register extends Component {
  state = {
    firebase: null,
    user: initUser,
  };

  // Add prop firebase to the state
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.firebase === prevState.firebase) {
      return null;
    }

    return {
      firebase: nextProps.firebase,
    };
  }

  onChange = (e) => {
    let user = Object.assign({}, this.state.user);
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firebase, user } = this.state;

    firebase.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        const userDB = {
          userId: auth.user.uid,
          firstName: user.firstName,
          email: user.email,
          lastName: user.lastName,
        };
        firebase.db
          .collection("Users")
          .add(userDB)
          .then((resp) => {
            this.props.history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su cuenta
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="Ingrese su nombre"
                  value={user.firstName}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  name="lastName"
                  label="Ingrese sus apellidos"
                  value={user.lastName}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Ingrese su email"
                  value={user.email}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  type="password"
                  label="Ingrese su contraseña"
                  value={user.password}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  style={style.button}
                  onClick={this.onSubmit}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(consumerFirebase)(Register);
