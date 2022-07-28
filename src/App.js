import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Layout from "./components/pages/Layout";

function App() {
  return (
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
  );
}

export default App;
