import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import Inventory from "./pages/Inventory/Inventory";
import Add from "./pages/Add/Add";
import UploadDis from "./components/ListItems/UploadDis";

const App = () => {
  return (
   
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/add" element={<Add />} />
      <Route path="/UploadDis" element={<UploadDis />} />
    </Routes>
    
  
 
  );
};
export default App;
