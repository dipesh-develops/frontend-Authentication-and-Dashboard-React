import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout clicked");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>Dashboard</h1>
          {/* static email and name */}
          <Typography variant="h5">Email:Dipesh@gmail.com</Typography>
          <Typography variant="h6">Name: Dipesh</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
