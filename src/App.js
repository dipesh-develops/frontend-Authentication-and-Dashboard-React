import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Layout from "./components/pages/Layout";
import { createTheme } from "@mui/material/styles";

import { ThemeProvider } from "@emotion/react";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPasswordResultEmail from './components/pages/auth/SendPasswordResultEmail';
import ResetPassword from './components/pages/auth/ResetPassword';

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#171717",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "##fe5000",
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
            <Route  path='login' element={<LoginReg/>}/>
            <Route  path='passwordreset' element={<SendPasswordResultEmail />}/>
            <Route  path='reset' element={<ResetPassword />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
