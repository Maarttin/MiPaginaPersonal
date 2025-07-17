import React from "react";
import Card1 from "../components/Card";
import ButtonBaseDemo from "../components/Boton";
import SelectActionCard from "../components/SelectCard"
function Home() {
    return (
        <div className="min-h-screen bg-[#e0e1dd]">


            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-black pt-20 pb-10" >Ingeniero en Computación</h1>

            <div className="flex justify-between px-10">
                <Card1 />
                <div className="flex flex-col pr-10">
                    <SelectActionCard />
                    <div className="mt-4">
                        <ButtonBaseDemo />
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default Home