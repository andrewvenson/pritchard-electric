import React, {useEffect, useState} from "react";
import { styled, connect, Global } from "frontity";

const Home = (props) => {

    const [color, setColor] = useState({
        one: "#1f40a3",
        two: "#1f40a3",
        three: "#1f40a3",
        four: "#1f40a3"
    })

    const transition = 
    {
        width: "25%", height: "100%",
        transition: "all 1s ease",
        WebkitTransition: "all 1s ease",
        MozTransition: "all 1s ease"
    }
    
    return (
        <div style={{width: "100%"}}>
            <section style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://wallpaperaccess.com/full/2114804.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
                <h1 style={{color:"white", fontSize: 70}}>KEEP YOUR WORKSPACE SAFE</h1>
            </section>

            <section style={{ width: "100%", height: "633.83px", display: "flex"}}>
                <div style={{...transition, borderTop: `6px solid ${color.one}`}} onMouseOver={() => {setColor({...color, one: "white"})}} onMouseLeave={() => {setColor({...color, one: "#1f40a3"})}}>Test</div>
                <div style={{...transition, borderTop: `6px solid ${color.two}`}} onMouseOver={() => {setColor({...color, two: "white"})}} onMouseLeave={() => {setColor({...color, two: "#1f40a3"})}}>Test</div>
                <div style={{...transition, borderTop: `6px solid ${color.three}`}} onMouseOver={() => {setColor({...color, three: "white"})}} onMouseLeave={() => {setColor({...color, three: "#1f40a3"})}}>Test</div>
                <div style={{...transition, borderTop: `6px solid ${color.four}`}} onMouseOver={() => {setColor({...color, four: "white"})}} onMouseLeave={() => {setColor({...color, four: "#1f40a3"})}}>Test</div>
            </section>

            <section style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://images.caricos.com/m/mercedes-benz/2019_mercedes-benz_a-class_sedan/images/1920x1080/2019_mercedes-benz_a-class_sedan_181_1920x1080.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
                <h1 style={{color:"white", fontSize: 70}}>BRING YOUR LIGHT INTO THE 21ST CENTURY</h1>
            </section>

            <div style={{backgroundColor: "#1f40a3", width: "100%", height: "633.83px"}}>Hello there</div>
        </div>
    );
};

// Connect the Item to gain access to `state` as a prop
export default Home
