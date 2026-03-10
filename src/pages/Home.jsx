import React from "react";
import { Link } from "react-router-dom";
import Card1 from "../components/Card";
import SelectActionCard from "../components/SelectCard"
import Certificates from "../components/Certificates";
import handleDownload from "../components/Boton";
function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <h1 className="text-xs sm:text-base md:text-2xl lg:text-4xl text-center font-black pt-20 pb-10">Ingeniero en Computación</h1>
      <div className="flex flex-col lg:flex-row justify-center px-2 gap-8">
        <div className="p-2 flex flex-col gap-6">
          <Card1 />
          <div className="botones" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link to="/cv" style={{ textDecoration: 'none' }}>
              <button>
                Ver CV</button></Link>
                
            <button  onClick={handleDownload}>Descargar CV</button>
          </div>    
          
        

          <SelectActionCard />
          <div className="proyectos" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Link to="/proyectos" style={{ textDecoration: 'none' }}>
            <button>Mis proyectos</ button>
            </Link>
            </ div>
          <Certificates />
        </div>
      </div>
    </div>
  )
}

export default Home