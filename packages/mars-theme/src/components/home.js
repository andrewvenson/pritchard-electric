import React, {useEffect, useState} from "react";
import { styled, connect, Global } from "frontity";

const Home = (props) => {

    useEffect(() => {


    }, [])

    const [color, setColor] = useState({
        one: ["#1f40a3", 1, 0.5],
        two: ["#1f40a3", 1, 0.5],
        three: ["#1f40a3", 1, 0.5],
        four: ["#1f40a3", 1, 0.5]
    })

    const transition = 
    {
        width: "25%", 
        minWidth: "273.25px",
        height: "100%",
        transition: "all 1s ease-in-out",
        WebkitTransition: "all 1s ease-in-out",
        MozTransition: "all 1s ease-in-out"
    }

    const serviceHover = 
    {
        WebkitTransition: "all 1s ease-in-out",
        MozTransition: "all 1s ease-in-out",
    }
    
    return (
        <div style={{width: "100%", height: "100vh"}}>
            {/* Regular width */}
            <section style={{display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://wallpaperaccess.com/full/2114804.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h1 style={{color:"white", fontSize: 70, margin: 0, textShadow: "3px 4px 5px black"}}>KEEP YOUR WORKSPACE SAFE</h1>
                <p style={{color: "white", textShadow: "3px 4px 5px black"}}>GET A SAFETY INSPECTION FROM A COMMERCIAL ELECTRICIAN IN AUSTIN,TX. PROUDLY SERVICING THE SURROUNDING AREAS.</p>
                <button style={{padding: 10, border: "none", backgroundColor: "#f4bb36", color: "white", fontSize: 20, fontWeight: "light"}}>CONTACT US ></button>
            </section>
            {/* Service Sections */}
            <section style={{ width: "100%", height: "60%", maxHeight: "633px", display: "flex"}}>
                {/* Electrical Panel Upgrades */}
                <div style={{...transition, borderTop: `6px solid ${color.one[0]}`, position: "relative" }} onMouseOver={() => {setColor({...color, one: ["white", 1.2, 0.7]})}} onMouseLeave={() => {setColor({...color, one: ["#1f40a3", 1, 0.5]})}}>
                    <div style={{...serviceHover, backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`, width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{...serviceHover, transform: `scale(${color.one[1]}, ${color.one[1]})`,width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://1888electricalservices.com/wp-content/uploads/2020/10/breaker-5-opt.jpg')"}}>
                    </div>
                    <div style={{width: "100%", height: "100%", zIndex: 50, display: "flex", justifyContent: "center", alignItems: "center", color: "white", position: "absolute", top: 0}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 25}}>
                            <h1>Eletrical Panel Upgrades</h1>
                            <div style={{borderBottom: "1px solid white", width: "100%"}}></div>
                            <p>MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING OF THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.</p>
                        </div>
                    </div>
                    <a href="https://www.google.com" style={{display: "inline-block", width: "100%", height: "100%", position: "absolute", top: 0, zIndex: 999}}/>
                </div>
                {/* Residential Electrical Services */}
                <div style={{...transition, borderTop: `6px solid ${color.two[0]}`, position: "relative", overflow: "hidden" }} onMouseOver={() => {setColor({...color, two: ["white", 1.2, 0.7]})}} onMouseLeave={() => {setColor({...color, two: ["#1f40a3", 1, 0.5]})}}>
                    <div style={{...serviceHover, backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`, width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{...serviceHover, transform: `scale(${color.two[1]}, ${color.two[1]})`,width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://tmelectriclubbock.com/files/bigstock/2019/01/Multimeter-In-Hands-Of-Electri-259157458.jpg?w=1440&h=1080&a=t')"}}>
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
                <div style={{...transition, borderTop: `6px solid ${color.three[0]}`, position: "relative", overflow: "hidden" }} onMouseOver={() => {setColor({...color, three: ["white", 1.2, 0.7]})}} onMouseLeave={() => {setColor({...color, three: ["#1f40a3", 1, 0.5]})}}>
                    <div style={{...serviceHover, backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`, width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{...serviceHover, transform: `scale(${color.three[1]}, ${color.three[1]})`,width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://ecotality.com/wp-content/uploads/outdoor-solar-lights-on-the-grass-of-the-house-e1581972026149.jpg')"}}>
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
                <div style={{...transition, borderTop: `6px solid ${color.four[0]}`, position: "relative", overflow: "hidden" }} onMouseOver={() => {setColor({...color, four: ["white", 1.2, 0.7]})}} onMouseLeave={() => {setColor({...color, four: ["#1f40a3", 1, 0.5]})}}>
                    <div style={{...serviceHover, backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`, width: "100%", height: "100%", zIndex: 1}}></div>
                    <div style={{...serviceHover, transform: `scale(${color.four[1]}, ${color.four[1]})`,width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", position: "absolute", top: 0, zIndex: -5, backgroundImage: "url('https://2797fu1w31hw3px4un14hs9l-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/lighting-installation-pendant-sarasota-bee-ridge-lighting-1024x673.jpg')"}}>
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

            <section style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://ecotality.com/wp-content/uploads/outdoor-solar-lights-on-the-grass-of-the-house-e1581972026149.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
                <h1 style={{color:"white", fontSize: 70}}>BRING YOUR LIGHT INTO THE 21ST CENTURY</h1>
            </section>

            <div style={{backgroundColor: "#1f40a3", width: "100%", height: "633.83px"}}>Hello there</div>
        </div>
    );
};

// Connect the Item to gain access to `state` as a prop
export default Home
