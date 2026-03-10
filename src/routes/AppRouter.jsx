import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Cv from "../pages/Cv";
import Proyectos from "../pages/Proyectos";
import ButtonAppBar from "../components/Nav";
function AppRouter() {
    return (
        <BrowserRouter basename="/MiPaginaPersonal">
           <ButtonAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/proyectos" element={<Proyectos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter