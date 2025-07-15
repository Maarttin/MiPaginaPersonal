import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import ButtonAppBar from "../components/Nav";
function AppRouter() {
    return (
        <BrowserRouter>
            <ButtonAppBar></ButtonAppBar>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter