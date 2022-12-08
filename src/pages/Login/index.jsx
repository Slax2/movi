import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Box,
  Typography,
  CssBaseline,
  Container,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Config from "../../config";

const Login = () => {
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const searchUser = () => {
    return Config.authUsers;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const datosUsuario = searchUser();
    const datosBusqueda = datosUsuario.find(
      (username) =>
        username.username == userData.user &&
        username.password == userData.password
    );
    if (datosBusqueda != undefined) {
      localStorage.setItem("usuario", JSON.stringify(datosBusqueda));
    }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "red" }}></Avatar>
      </Box>

      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box>
        <TextField
          margin="normal"
          label="User"
          fullWidth
          autoFocus
          id="user"
          name="user"
          onChange={handleInput}
        />
        <TextField
          id="password"
          name="password"
          margin="normal"
          label="Password"
          fullWidth
          type="password"
          autoFocus
          onChange={handleInput}
        />
        <FormControlLabel
          label="Remenber me"
          xs={{ display: "flex", justifyContent: "start" }}
          control={<Checkbox />}
        />
        <Link to="/Search">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
