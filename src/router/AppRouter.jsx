import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact"
import Home from "../pages/Home";
function AppRouter() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Navigate to= "home"/>}/>
        </Routes>
     );
}

export default AppRouter;