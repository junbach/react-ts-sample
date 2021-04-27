import "./App.css";

import { Box, Button, Container, CssBaseline } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { ReactElement } from "react";

import logo from "./logo.svg";

export default function App(): ReactElement {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className="appContainer">
        <Box color="primary" className="appContent">
          <img src={logo} className="appLogo" alt="logo" />
          <Button variant="contained" color="secondary" startIcon={<Send />}>
            Send me a message
          </Button>
        </Box>
      </Container>
    </>
  );
}
