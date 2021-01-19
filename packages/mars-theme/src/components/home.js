
import React, {useEffect, useState} from "react";

const Home = (props) => {

    const [scroll, setScroll] = useState(1000);

    useEffect(
        () => {
            window.addEventListener('scroll', handleScroll);

            // cleanup
            return () => {
                console.log("cleanup")
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
                
                console.log(scroll - window.pageYOffset)
            }
        }
    }
    return (
        <div>
            <div style={{zIndex: 999}}>
                <section style={{height: 650, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{color:"white", fontSize: 70}}>KEEP YOUR WORKSPACE SAFE</h1>
                    <div style={{position: "fixed", top:0, zIndex: -50, height: scroll, overflow: "hidden", bacgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        <img src={"https://wallpaperaccess.com/full/2114804.jpg"} style={{width: "100%"}}/>
                    </div>
                </section>

                <div style={{backgroundColor: "#1f40a3", width: "100%", height: "633.83px"}}></div>

                <div style={{height: 650, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{color:"white", fontSize: 70, overflow: "hidden"}}>BRING YOUR LIGHT INTO THE 21ST CENTURY</h1>
                    <div style={{position: "fixed", top: 0, zIndex: -100}}>
                        <img src={"https://images.caricos.com/m/mercedes-benz/2019_mercedes-benz_a-class_sedan/images/1920x1080/2019_mercedes-benz_a-class_sedan_181_1920x1080.jpg"} style={{height: "100%"}}/>
                    </div>
                </div>
                
                <div style={{backgroundColor: "#1f40a3", width: "100%", height: "633.83px"}}>Hello there</div>



            </div>

        </div>
    );
};

// Connect the Item to gain access to `state` as a prop
export default Home