
import React, {useEffect, useState} from "react";

const Home = (props) => {

    const [scroll, setScroll] = useState(1000);

    useEffect(
        () => {
            window.addEventListener('scroll', handleScroll);
            // cleanup
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, []
    )

    // image change effect
    const handleScroll = () => {
        window.onscroll = () => {
            if(window.pageYOffset >= 1000){
                setScroll(0)
            }else if (window.pageYOffset < 1000){
                setScroll(1000 - window.pageYOffset)
            }
        }
    }
    return (
        <div style={{width: "100%"}}>
            <section style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://wallpaperaccess.com/full/2114804.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"}}>
                <h1 style={{color:"white", fontSize: 70}}>KEEP YOUR WORKSPACE SAFE</h1>
            </section>

            <section style={{ width: "100%", height: "633.83px", display: "flex"}}>
                <div style={{backgroundColor: "#1f40a3",width: "25%", height: "100%", border: "1px solid black"}} onMouseOver={() => {}}>Test</div>
                <div style={{backgroundColor: "#1f40a3",width: "25%", height: "100%", border: "1px solid black"}}>Test</div>
                <div style={{backgroundColor: "#1f40a3",width: "25%", height: "100%", border: "1px solid black"}}>Test</div>
                <div style={{backgroundColor: "#1f40a3",width: "25%", height: "100%", border: "1px solid black"}}>Test</div>
            </section>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: 600, backgroundImage: "url('https://images.caricos.com/m/mercedes-benz/2019_mercedes-benz_a-class_sedan/images/1920x1080/2019_mercedes-benz_a-class_sedan_181_1920x1080.jpg')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"}}>
                <h1 style={{color:"white", fontSize: 70, overflow: "hidden"}}>BRING YOUR LIGHT INTO THE 21ST CENTURY</h1>
            </div>

            <div style={{backgroundColor: "#1f40a3", width: "100%", height: "633.83px"}}>Hello there</div>
        </div>
    );
};

// Connect the Item to gain access to `state` as a prop
export default Home