import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function User() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const user = { email, name, nickname, password, surname };
    console.log(user);
    fetch("http://localhost:8080/user/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("New user added");
    });
  };
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add User</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="email"
            label="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="nickname"
            label="nickname"
            variant="outlined"
            fullWidth
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="surname"
            label="surname"
            variant="outlined"
            fullWidth
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
