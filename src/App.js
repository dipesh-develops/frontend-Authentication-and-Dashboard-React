import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Layout from "./components/pages/Layout";
import { createTheme } from "@mui/material/styles";

import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#0CBABA",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#380036",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route  index element={<Home/>}/>
            <Route  path='contact' element={<Contact/>}/>
            <Route  path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
