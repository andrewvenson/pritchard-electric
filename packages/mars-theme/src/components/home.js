import React, {useEffect, useState} from "react";
import { styled, connect, Global } from "frontity";

const Home = (props) => {

    useEffect(() => {


    }, [])

    const [color, setColor] = useState({
        one: "#1f40a3",
        two: "#1f40a3",
        three: "#1f40a3",
        four: "#1f40a3"
    })

    const transition = 
    {
        width: "25%", 
        height: "100%",
        transition: "all 1s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease"
    }
    
    return (
        <div style={{width: "100%", height: "100vh"}}>
            <section style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://wallpaperaccess.com/full/2114804.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h1 style={{color:"white", fontSize: 70}}>KEEP YOUR WORKSPACE SAFE</h1>
            </section>

            {/* Service Sections */}
            <section style={{ width: "100%", height: "60%", maxHeight: "633px", display: "flex"}}>
                {/* Electrical Panel Upgrades */}
                <div style={{...transition, borderTop: `6px solid ${color.one}`, position: "relative" }} onMouseOver={() => {setColor({...color, one: "white"})}} onMouseLeave={() => {setColor({...color, one: "#1f40a3"})}}>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://1888electricalservices.com/wp-content/uploads/2020/10/breaker-5-opt.jpg')"}}>
                    </div>
                    <div style={{width: "100%", height: "100%", zIndex: 50, display: "flex", justifyContent: "center", alignItems: "center", color: "white", position: "absolute", top: 0}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 25}}>
                            <h1>Eletrical Panel Upgrades</h1>
                            <div style={{borderBottom: "1px solid white", width: "100%"}}></div>
                            <p>MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING OF THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.</p>
                        </div>
                    </div>
                </div>
                {/* Residential Electrical Services */}
                <div style={{...transition, borderTop: `6px solid ${color.two}`, position: "relative" }} onMouseOver={() => {setColor({...color, two: "white"})}} onMouseLeave={() => {setColor({...color, two: "#1f40a3"})}}>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://1888electricalservices.com/wp-content/uploads/2020/10/breaker-5-opt.jpg')"}}>
                    </div>
                    <div style={{width: "100%", height: "100%", zIndex: 50, display: "flex", justifyContent: "center", alignItems: "center", color: "white", position: "absolute", top: 0}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 25}}>
                            <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                            <div style={{borderBottom: "1px solid white", width: "100%"}}></div>
                            <p>ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.</p>
                        </div>
                    </div>
                </div>
                {/* Commercial Electrical Services */}
                <div style={{...transition, borderTop: `6px solid ${color.three}`, position: "relative" }} onMouseOver={() => {setColor({...color, three: "white"})}} onMouseLeave={() => {setColor({...color, three: "#1f40a3"})}}>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://1888electricalservices.com/wp-content/uploads/2020/10/breaker-5-opt.jpg')"}}>
                    </div>
                    <div style={{width: "100%", height: "100%", zIndex: 50, display: "flex", justifyContent: "center", alignItems: "center", color: "white", position: "absolute", top: 0}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 25}}>
                            <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                            <div style={{borderBottom: "1px solid white", width: "100%"}}></div>
                            <p>WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO PROPERTY OWNERS OF THE AUSTIN, TX AREA.</p>
                        </div>
                    </div>
                </div>
                {/* Lighting Services */}
                <div style={{...transition, borderTop: `6px solid ${color.four}`, position: "relative" }} onMouseOver={() => {setColor({...color, four: "white"})}} onMouseLeave={() => {setColor({...color, four: "#1f40a3"})}}>
                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://1888electricalservices.com/wp-content/uploads/2020/10/breaker-5-opt.jpg')"}}>
                    </div>
                    <div style={{width: "100%", height: "100%", zIndex: 50, display: "flex", justifyContent: "center", alignItems: "center", color: "white", position: "absolute", top: 0}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 25}}>
                            <h1>LIGHTING SERVICES</h1>
                            <div style={{borderBottom: "1px solid white", width: "100%"}}></div>
                            <p>WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND EXTERIOR RESIDENTIAL LIGHTING.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://images.caricos.com/m/mercedes-benz/2019_mercedes-benz_a-class_sedan/images/1920x1080/2019_mercedes-benz_a-class_sedan_181_1920x1080.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
                <h1 style={{color:"white", fontSize: 70}}>BRING YOUR LIGHT INTO THE 21ST CENTURY</h1>
            </section>

            <div style={{backgroundColor: "#1f40a3", width: "100%", height: "633.83px"}}>Hello there</div>
        </div>
    );
};

// Connect the Item to gain access to `state` as a prop
export default Home
