import React from "react";
import Card1 from "../components/Card";
import ButtonBaseDemo from "../components/Boton";
import SelectActionCard from "../components/SelectCard"
function Home() {
    return (
        <div className="min-h-screen bg-[#e0e1dd]">


            <h1 className="text-center text-3xl font-black pt-20 pb-10" >Ingeniero en Computación</h1>

            <div className="flex justify-between px-10">
                <div className="flex flex-col pr-10">
                    <SelectActionCard />
                    <div className="mt-4">
                        <ButtonBaseDemo />
                    </div>
                </div>
                <Card1 />
            </div>


        </div>
    )
}

export default Home