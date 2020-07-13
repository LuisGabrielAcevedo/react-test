import React, { Component } from "react";
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
} from "src/material-ui";
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
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
  email: "",
  password: "",
};

class Login extends Component {
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
      .signInWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        console.log(resp);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <Container maxWidth="xs">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingrese usuario
          </Typography>
          <form style={style.form}>
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              label="Ingrese su email"
              value={user.firstName}
              onChange={this.onChange}
              margin="normal"
            />
            <TextField
              fullWidth
              name="password"
              variant="outlined"
              type="password"
              label="Ingrese su contraseña"
              value={user.password}
              onChange={this.onChange}
              margin="normal"
            />
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
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(consumerFirebase)(Login);
