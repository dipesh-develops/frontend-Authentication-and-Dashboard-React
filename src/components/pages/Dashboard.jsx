import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <CssBaseline />
      <Grid>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          {/* static email and name */}
          <Typography variant="h5">Email:Dipesh@gmail.com</Typography>
          <Typography variant="h6">Name: Dipesh</Typography>
        </Grid>
        <Grid item sm={8}></Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
