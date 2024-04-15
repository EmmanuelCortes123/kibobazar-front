import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact"
import Formulario from "../pages/Formulario";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Questions from "../pages/Questions";
function AppRouter() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/formulario" element={<Formulario/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/questions" element={<Questions/>}/>
            <Route path="/" element={<Navigate to= "home"/>}/>
        </Routes>
     );
}

export default AppRouter;