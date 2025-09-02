import React from "react";
import Card1 from "../components/Card";
import ButtonBaseDemo from "../components/Boton";
import SelectActionCard from "../components/SelectCard"
import Certificates from "../components/Certificates";
function Home() {
    return (
    <div className="min-h-screen overflow-hidden">


            <h1 className="text-xs sm:text-base md:text-2xl lg:text-4xl text-center font-black pt-20 pb-10">Ingeniero en Computación</h1>

            <div className="flex flex-col lg:flex-row justify-center px-4 gap-4">
                <div className=" p-2 sm:p-4 md:p-6 lg:p-8">
                    
                    <Card1 />
                    <div className="mt-4 p-2 sm:p-4 md:p-6 lg:p-8">
                            <ButtonBaseDemo />
                        </div>

                    <div className="flex flex-col ">
                        <SelectActionCard />
                        
                        <Certificates />
                    </div> 
                </div>

            </div>


        </div>
    )
}

export default Home