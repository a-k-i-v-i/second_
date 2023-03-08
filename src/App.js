import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutUs from "./components/aboutUs/AboutUs";
import Backend from "./components/backend/Backend";
import Club from "./components/club/Club";
import Frontend from "./components/frontend/Frontend";
import Home from "./components/home/Home";
import Layout from "./components/Layout/Layout";
import UxUi from "./components/UX-UI/UxUi";



function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="UxUi" element={<UxUi />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="club" element={<Club />} />
        </Route>
      </Routes>
    
    </div>
  ); 

}

export default App;
