import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled, connect, css, Global, decode } from "frontity";
import PropagateLoader from "react-spinners/PropagateLoader";
import Footer from "./footer";
import ContactForm from "./contactform";
import Link from "./link";
import NotificationModal from "./notfication-modal";

const Home = ({ state, actions, notificationmodal, showNotificationModal }) => {
  useEffect(() => {
    actions.source.fetch("/home-post", { force: true });
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const answer = num1 + num2;
    setSecurityCheck({
      ...securitycheck,
      randomNum1: num1,
      randomNum2: num2,
      randomAnswer: answer,
    });
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    showNotificationModal(!notificationmodal);
  }, []);

  const [loader, showLoader] = useState(false);

  const [contactvals, setContactVals] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [securitycheck, setSecurityCheck] = useState({
    randomNum1: null,
    randomNum2: null,
    randomAnswer: null,
    clientAnswer: "",
    human: "none",
    firstname: "none",
    lastname: "none",
    email: "none",
    phone: "none",
    message: "none",
  });

  const submitContactForm = (e) => {
    e.preventDefault();
    showLoader(true);

    setSecurityCheck({
      ...securitycheck,
      human:
        parseInt(securitycheck.clientAnswer) !== securitycheck.randomAnswer
          ? "block"
          : "none",
      firstname: contactvals.firstname == "" ? "block" : "none",
      lastname: contactvals.lastname == "" ? "block" : "none",
      email: contactvals.email == "" ? "block" : "none",
      phone: contactvals.phone == "" ? "block" : "none",
      message: contactvals.message == "" ? "block" : "none",
    });

    if (
      contactvals.firstname !== "" &&
      contactvals.lastname !== "" &&
      contactvals.email !== "" &&
      contactvals.phone !== "" &&
      contactvals.message !== "" &&
      parseInt(securitycheck.clientAnswer) == securitycheck.randomAnswer
    ) {
      axios
        .post("https://pritchard-email.herokuapp.com/post/sendemail", {
          firstname: contactvals.firstname,
          lastname: contactvals.lastname,
          email: contactvals.email,
          phone: contactvals.phone,
          message: contactvals.message,
        })
        .then((response) => {
          console.log(response);
          setContactVals({
            ...contactvals,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });

          const num1 = Math.floor(Math.random() * 10);
          const num2 = Math.floor(Math.random() * 10);
          const answer = num1 + num2;

          setSecurityCheck({
            ...securitycheck,
            human: "none",
            clientAnswer: "",
            randomAnswer: answer,
            randomNum1: num1,
            randomNum2: num2,
            firstname: "none",
            lastname: "none",
            email: "none",
            phone: "none",
            message: "none",
          });
          showLoader(false);
        })
        .catch((err) => console.log(err));
    } else {
      showLoader(false);
    }
  };

  const data = state.source.get("/home-post/");

  const [color, setColor] = useState({
    one: ["#1f40a3", 1, 0.5],
    two: ["#1f40a3", 1, 0.5],
    three: ["#1f40a3", 1, 0.5],
    four: ["#1f40a3", 1, 0.5],
  });

  const serviceHover = {
    WebkitTransition: "all 1s ease-in-out",
    MozTransition: "all 1s ease-in-out",
  };

  const width = {
    width: "25vw",
    height: "35vw",
  };

  const mobileWidth = {
    width: "50vw",
    height: "65vw",
  };

  const mobile560Width = {
    width: "100%",
    height: "110vw",
  };

  const contactInput = {
    border: "1px solid lightgray",
    height: "30px",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: "4px",
  };

  const contactSuggestions = {
    border: "1px solid lightgray",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: "4px",
  };

  if (data.isPost) {
    const globalStyles = css`
      body {
        overflow-y: ${notificationmodal ? "hidden" : "visible"};
      }
    `;
    const category = state.source.post[data.id];
    const firstHeader = category.content.rendered;

    return (
      <main style={{ width: "100%", height: "100vh" }}>
        {/* Regular width */}

        {notificationmodal && (
          <NotificationModal
            notificationmodal={notificationmodal}
            showNotificationModal={showNotificationModal}
          />
        )}

        <section
          className="desktopWorkspace"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "500px",
            backgroundImage:
              "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-belt.jpg')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
            padding: "0px 40px 40px 40px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 70,
              margin: 0,
              textShadow: "3px 4px 5px black",
              textTransform: "uppercase",
            }}
            dangerouslySetInnerHTML={{ __html: firstHeader }}
          ></h1>
          <p
            style={{
              color: "white",
              textShadow: "3px 4px 5px black",
              fontSize: "20px",
            }}
          >
            GET A SAFETY INSPECTION FROM A COMMERCIAL ELECTRICIAN IN AUSTIN,TX.
            PROUDLY SERVICING THE SURROUNDING AREAS.
          </p>
          <Link
            style={{
              padding: 10,
              border: "none",
              backgroundColor: "#f4bb36",
              color: "white",
              fontSize: "20px",
              fontWeight: "light",
            }}
            link="/contact"
          >
            CONTACT US ›
          </Link>
        </section>

        {/* MOBILE WORKSPACE SECTION */}
        <section
          className="mobileWorkspace"
          style={{
            display: "none",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vw",
            background:
              "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-belt.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
            padding: "0px 40px 40px 40px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 500,
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          {/* DESKTOP WORKSPACE TEXT */}
          <div style={{ zIndex: 999 }} className="desktopWorkspaceText">
            <h1
              style={{
                color: "white",
                fontSize: "40px",
                textShadow: "3px 4px 5px black",
                textTransform: "uppercase",
              }}
              dangerouslySetInnerHTML={{ __html: firstHeader }}
            ></h1>
            <p
              style={{
                color: "white",
                textShadow: "3px 4px 5px black",
              }}
            >
              GET A SAFETY INSPECTION FROM A COMMERCIAL ELECTRICIAN IN
              AUSTIN,TX. PROUDLY SERVICING THE SURROUNDING AREAS.
            </p>
            <Link
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: "18px",
                fontWeight: "light",
              }}
              link="/contact"
            >
              CONTACT US ›
            </Link>
          </div>

          {/* MOBILE WORKSPACE TEXT */}
          <div
            className="mobileWorkspaceText"
            style={{ display: "none", zIndex: 9999 }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "28px",
                margin: 0,
                textShadow: "3px 4px 5px black",
                textTransform: "uppercase",
              }}
              dangerouslySetInnerHTML={{ __html: firstHeader }}
            ></h1>
            <p
              style={{
                color: "white",
                textShadow: "3px 4px 5px black",
                fontSize: "14px",
              }}
            >
              GET A SAFETY INSPECTION FROM A COMMERCIAL ELECTRICIAN IN
              AUSTIN,TX. PROUDLY SERVICING THE SURROUNDING AREAS.
            </p>
            <Link
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: "15px",
                fontWeight: "light",
              }}
              link="/contact"
            >
              CONTACT US ›
            </Link>
          </div>
        </section>

        {/* Service Sections */}
        <section
          className="desktopView"
          style={{ width: "100%", display: "flex" }}
        >
          {/* Electrical Panel Upgrades */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, one: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, one: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.one[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`,
                zIndex: 1,
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.one[1]}, ${color.one[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-pole-work.jpg')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>ELECTRICAL PANEL UPGRADES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING OF
                  THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.
                </p>
              </div>
            </div>
            <Link
              link="/electrical-panel-upgrades"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>

          {/* Residential Electrical Services */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, two: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, two: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.two[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.two[1]}, ${color.two[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-man.jpg')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND
                  APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.
                </p>
              </div>
            </div>
            <Link
              link="/residential-electrical-services"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Commercial Electrical Services */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, three: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, three: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.three[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.three[1]}, ${color.three[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-light.jpg')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO
                  PROPERTY OWNERS OF THE AUSTIN, TX AREA.
                </p>
              </div>
            </div>
            <Link
              link="/commercial-electrical-services"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Lighting Services */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, four: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, four: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.four[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.four[1]}, ${color.four[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-crimp.jpg')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>LIGHTING SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND
                  EXTERIOR RESIDENTIAL LIGHTING.
                </p>
              </div>
            </div>
            <Link
              link="/lighting-services"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
        </section>

        {/* Mobile View - Service Sections - 1086px */}
        <section
          className="mobileView"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            display: "none",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* Electrical Panel Upgrades */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, one: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, one: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.one[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`,
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.one[1]}, ${color.one[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-pole-work.jpg')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>ELECTRICAL PANEL UPGRADES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING
                    OF THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.
                  </p>
                </div>
              </div>
              <Link
                link="/electrical-panel-upgrades"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
            {/* Residential Electrical Services */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, two: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, two: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.two[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.two[1]}, ${color.two[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-man.jpg')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND
                    APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.
                  </p>
                </div>
              </div>
              <Link
                link="/residential-electrical-services"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {/* Commercial Electrical Services */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, three: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, three: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.three[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.three[1]}, ${color.three[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-light.jpg')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO
                    PROPERTY OWNERS OF THE AUSTIN, TX AREA.
                  </p>
                </div>
              </div>
              <Link
                link="/commercial-electrical-services"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
            {/* Lighting Services */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, four: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, four: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.four[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.four[1]}, ${color.four[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-crimp.jpg')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>LIGHTING SERVICES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND
                    EXTERIOR RESIDENTIAL LIGHTING.
                  </p>
                </div>
              </div>
              <Link
                link="/lighting-services"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
          </div>
        </section>

        {/* Mobile View - Service Sections - 560px*/}
        <section
          className="mobile560View"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            display: "none",
          }}
        >
          {/* Electrical Panel Upgrades */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, one: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, one: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.one[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`,
                zIndex: 1,
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.one[1]}, ${color.one[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-pole-work.jpg')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                className="service"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>ELECTRICAL PANEL UPGRADES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING OF
                  THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.
                </p>
              </div>
            </div>
            <Link
              link="/electrical-panel-upgrades"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Residential Electrical Services */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, two: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, two: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.two[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.two[1]}, ${color.two[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-man.jpg')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                className="service"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND
                  APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.
                </p>
              </div>
            </div>
            <Link
              link="/residential-electrical-services"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Commercial Electrical Services */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, three: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, three: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.three[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.three[1]}, ${color.three[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-light.jpg')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                className="service"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO
                  PROPERTY OWNERS OF THE AUSTIN, TX AREA.
                </p>
              </div>
            </div>
            <Link
              link="/commercial-electrical-services"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Lighting Services */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, four: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, four: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.four[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.four[1]}, ${color.four[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-crimp.jpg')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                className="service"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>LIGHTING SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND
                  EXTERIOR RESIDENTIAL LIGHTING.
                </p>
              </div>
            </div>
            <Link
              link="/lighting-services"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
        </section>

        {/* BRING YOUR LIGHT INTO THE 21ST CENTURY */}
        <section
          className="desktopWorkspace"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 50px 0px 50px",
            minHeight: 600,
            backgroundImage:
              "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/sidwalk-lights.jpg')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 70,
              margin: 0,
              textShadow: "3px 4px 5px black",
              textTransform: "uppercase",
            }}
          >
            BRING YOUR LIGHT INTO THE 21ST CENTURY
          </h1>
          <p
            style={{
              color: "white",
              textShadow: "3px 4px 5px black",
              fontSize: "20px",
            }}
          >
            OUR ELECTRICAL SERVICES INCLUDE LANDASCAPE LIGHTING UPGRADES
          </p>
          <Link
            style={{
              padding: 10,
              border: "none",
              backgroundColor: "#f4bb36",
              color: "white",
              fontSize: 20,
              fontWeight: "light",
            }}
            link="/contact"
          >
            CONTACT US ›
          </Link>
        </section>

        {/* MOBILE WORKSPACE SECTION */}
        <section
          className="mobileWorkspace"
          style={{
            display: "none",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vw",
            background:
              "url('https://manage.pritchardelectric.net/wp-content/uploads/2021/03/sidwalk-lights.jpg'), rgba(0, 0, 0, 0.8)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
            padding: "0px 40px 40px 40px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 500,
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          {/* DESKTOP WORKSPACE TEXT */}
          <div className="desktopWorkspaceText" style={{ zIndex: 999 }}>
            <h1
              style={{
                color: "white",
                fontSize: "40px",
                textShadow: "3px 4px 5px black",
                textTransform: "uppercase",
              }}
            >
              BRING YOUR LIGHT INTO THE 21ST CENTURY
            </h1>
            <p
              style={{
                color: "white",
                textShadow: "3px 4px 5px black",
              }}
            >
              OUR ELECTRICAL SERVICES INCLUDE LANDASCAPE LIGHTING UPGRADES
            </p>
            <Link
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: "18px",
                fontWeight: "light",
              }}
              link="/contact"
            >
              CONTACT US ›
            </Link>
          </div>

          {/* MOBILE WORKSPACE TEXT */}
          <div
            className="mobileWorkspaceText"
            style={{ display: "none", zIndex: 999 }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "28px",
                margin: 0,
                textShadow: "3px 4px 5px black",
                textTransform: "uppercase",
              }}
            >
              BRING YOUR LIGHT INTO THE 21ST CENTURY
            </h1>
            <p
              style={{
                color: "white",
                textShadow: "3px 4px 5px black",
                fontSize: "14px",
              }}
            >
              OUR ELECTRICAL SERVICES INCLUDE LANDASCAPE LIGHTING UPGRADES
            </p>
            <Link
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: "15px",
                fontWeight: "light",
              }}
              link="/contact"
            >
              CONTACT US ›
            </Link>
          </div>
        </section>

        {/* DESKTOP VIEW */}
        <section
          className="CallElectricianTime"
          style={{
            backgroundColor: "#1f40a3",
            width: "100%",
            height: "25vw",
            display: "flex",
            color: "white",
            paddingTop: 75,
            paddingBottom: 75,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "49%",
              paddingLeft: 75,
              paddingRight: 75,
            }}
          >
            <h1 className="service" style={{ margin: 0 }}>
              IT'S TIME TO CALL YOUR ELECTRICIAN IF YOU NOTICE THESE SIGNS
            </h1>
            <p>
              Avoid that nightmare completely. Call an electrician from
              Pritchard Electric right away if you notice:
            </p>

            <ul>
              <li>Discolored or malfunctioning outlets</li>
              <li>Lights that flicker or buzz</li>
              <li>Frequently tripped circuit breakers</li>
            </ul>

            <p>
              We provide a wide range of{" "}
              <u>
                <Link link="/residential-electrical-services">
                  residential electrical services
                </Link>
              </u>{" "}
              in Austin, Texas and the surrounding area.
            </p>
          </div>
          <div style={{ height: "100%", border: "2px solid white" }}></div>

          <div
            style={{
              height: "100%",
              width: "49%",
              paddingRight: 75,
              paddingLeft: 75,
            }}
          >
            <img
              src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-testing.jpg"
              width="100%"
            />
          </div>
        </section>

        {/* MOBILE VIEW */}
        <section
          className="MobileCallElectricianTime"
          style={{
            backgroundColor: "#1f40a3",
            width: "100%",
            height: "50vh",
            display: "none",
            color: "white",
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "49%",
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <h1 className="service" style={{ margin: 0 }}>
              IT'S TIME TO CALL YOUR ELECTRICIAN IF YOU NOTICE THESE SIGNS
            </h1>
            <div style={{ fontSize: 12 }}>
              <p>
                Avoid that nightmare completely. Call an electrician from
                Pritchard Electric right away if you notice:
              </p>

              <ul>
                <li>Discolored or malfunctioning outlets</li>
                <li>Lights that flicker or buzz</li>
                <li>Frequently tripped circuit breakers</li>
              </ul>

              <p>
                We provide a wide range of{" "}
                <u>
                  <Link link="/residential-electrical-services">
                    residential electrical services
                  </Link>
                </u>{" "}
                in Austin, Texas and the surrounding area.
              </p>
            </div>
          </div>
          <div style={{ height: "100%", border: "2px solid white" }}></div>

          <div
            style={{
              height: "100%",
              width: "49%",
              paddingRight: 25,
              paddingLeft: 25,
            }}
          >
            <img
              src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-testing.jpg"
              width="100%"
            />
          </div>
        </section>

        {/* MOBILE VIEW < 556 */}
        <section
          className="Mobile556CallElectricianTime"
          style={{
            backgroundColor: "#1f40a3",
            width: "100%",
            display: "none",
            color: "white",
            flexDirection: "column",
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <div
            style={{
              // height: "100%",
              // width: "100%",
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <h1 className="service" style={{ margin: 0 }}>
              IT'S TIME TO CALL YOUR ELECTRICIAN IF YOU NOTICE THESE SIGNS
            </h1>
            <div style={{ fontSize: 12 }}>
              <p>
                Avoid that nightmare completely. Call an electrician from
                Pritchard Electric right away if you notice:
              </p>

              <ul>
                <li>Discolored or malfunctioning outlets</li>
                <li>Lights that flicker or buzz</li>
                <li>Frequently tripped circuit breakers</li>
              </ul>

              <p>
                We provide a wide range of{" "}
                <u>
                  <Link link="/residential-electrical-services">
                    residential electrical services
                  </Link>
                </u>{" "}
                in Austin, Texas and the surrounding area.
              </p>
            </div>
          </div>
          {/* <div style={{ height: "100%", border: "2px solid white" }}></div> */}

          <div
            style={{
              paddingRight: 25,
              paddingLeft: 25,
            }}
          >
            <img
              src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-testing.jpg"
              width="100%"
            />
          </div>
        </section>

        <section
          style={{
            backgroundColor: "white",
            padding: "0px 45px 0px 45px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              paddingBottom: "45px",
              color: "gray",
              width: "980px",
            }}
          >
            <h1 className="service" style={{ color: "#1f40a3" }}>
              PUT A LICENSED ELECTRICIAN IN YOUR CONTACT LIST
            </h1>
            <h3 className="goto" style={{ color: "#1f40a3" }}>
              MAKE US YOUR SOURCE FOR ELECTRICAL SERVICES IN AUSTIN, TX
            </h3>
            <div className="text">
              <p>
                Need a few electrical repairs or upgrades done around the house?
                You can call Pritchard Electric, LLC for electrical issues of
                all kinds, including repairs{" "}
                <Link
                  link="/electrical-panel-upgrades"
                  style={{ color: "#f4bb36", textDecoration: "underline" }}
                >
                  electrical panel upgrades
                </Link>
                ,{" "}
                <Link
                  link="/lighting-services"
                  style={{ color: "#f4bb36", textDecoration: "underline" }}
                >
                  lighting services
                </Link>{" "}
                and new wiring installations.
              </p>
              <p>
                Trust your home or business to an electrician with over 10 years
                of experience.
              </p>
            </div>
          </div>
        </section>

        {/* DESKTOP BOTTOM INFO AND CONTACT > 789 */}
        <section
          className="BottomInfoContact"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* COMMERCIAL ELECTRICAL SERVICES */}
            <div
              style={{
                width: "65%",
                display: "flex",
                padding: "10px",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ maxWidth: "653px", color: "gray" }}>
                <img
                  style={{ width: "100%", maxWidth: "652px", height: "275px" }}
                  src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-wall.jpg"
                  alt="Count on us for commercial electrical services"
                />
                <h1 style={{ color: "#1f40a3" }}>
                  COUNT ON US FOR COMMERCIAL ELECTRICAL SERVICES
                </h1>
                <div className="text">
                  <p>
                    Do you own a business or commercial property in the Travis
                    County area? Pritchard Electric provides commercial
                    electrical services for:
                  </p>
                  <ul>
                    <li>Office buildings</li>
                    <li>Apartment complexes</li>
                    <li>Retail shops and warehouses</li>
                  </ul>
                  <p>
                    Keep business running smoothly. Contact Austin, TX's premier
                    commercial electrician today at 512-252-4699. We serve
                    customers throughout the surrounding areas. Remember to ask
                    for a free estimate on equipment upgrades or any other
                    electrical service.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div style={{ width: "35%", padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <form style={{ width: "300px" }}>
                  <label>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      Name <span style={{ color: "red" }}>*</span>
                    </span>
                    <br />
                    <input
                      type="text"
                      style={{ ...contactInput }}
                      value={contactvals.firstname}
                      onChange={(e) =>
                        setContactVals({
                          ...contactvals,
                          firstname: e.target.value,
                        })
                      }
                    />
                    <br />
                    <span style={{ fontSize: 12, color: "gray" }}>First</span>
                    <br />
                    <p
                      style={{
                        color: "red",
                        fontSize: 15,
                        margin: 0,
                        display: securitycheck.firstname,
                      }}
                    >
                      Firstname is required
                    </p>
                    <label>
                      <input
                        type="text"
                        style={{ ...contactInput }}
                        value={contactvals.lastname}
                        onChange={(e) =>
                          setContactVals({
                            ...contactvals,
                            lastname: e.target.value,
                          })
                        }
                      />
                      <br />
                      <span style={{ fontSize: 12, color: "gray" }}>Last</span>
                      <br />
                      <p
                        style={{
                          color: "red",
                          fontSize: 15,
                          margin: 0,
                          display: securitycheck.lastname,
                        }}
                      >
                        Lastname is required
                      </p>
                    </label>
                  </label>
                  <br />
                  <label>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      Phone <span style={{ color: "red" }}>*</span>
                    </span>
                    <br />
                    <input
                      type="phone"
                      style={{ ...contactInput }}
                      value={contactvals.phone}
                      onChange={(e) =>
                        setContactVals({
                          ...contactvals,
                          phone: e.target.value,
                        })
                      }
                    />
                    <p
                      style={{
                        color: "red",
                        fontSize: 15,
                        margin: 0,
                        display: securitycheck.phone,
                      }}
                    >
                      (Format: 123-456-7890) Phone is required
                    </p>
                  </label>
                  <br />
                  <br />
                  <label>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      Email <span style={{ color: "red" }}>*</span>
                    </span>
                    <br />
                    <input
                      type="email"
                      style={{ ...contactInput }}
                      value={contactvals.email}
                      onChange={(e) =>
                        setContactVals({
                          ...contactvals,
                          email: e.target.value,
                        })
                      }
                    />
                    <p
                      style={{
                        color: "red",
                        fontSize: 15,
                        margin: 0,
                        display: securitycheck.email,
                      }}
                    >
                      Email is required
                    </p>
                  </label>
                  <br />
                  <br />
                  <label>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      Message/Suggestions{" "}
                      <span style={{ color: "red" }}>*</span>
                    </span>
                    <br />
                    <textarea
                      type="text"
                      style={{
                        ...contactSuggestions,
                        height: "100px",
                        resize: "none",
                      }}
                      value={contactvals.message}
                      onChange={(e) =>
                        setContactVals({
                          ...contactvals,
                          message: e.target.value,
                        })
                      }
                    />
                    <p
                      style={{
                        color: "red",
                        fontSize: 15,
                        margin: 0,
                        display: securitycheck.message,
                      }}
                    >
                      Message/Suggestions is required
                    </p>
                  </label>
                  <br />
                  <br />
                  <label>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      Security Check <span style={{ color: "red" }}>*</span>
                    </span>
                    <br />
                    <span>{securitycheck.randomNum1}</span>
                    <span> + </span>
                    <span style={{ marginRight: "5px" }}>
                      {securitycheck.randomNum2} =
                    </span>
                    <input
                      type="text"
                      style={{ ...contactInput, width: "200px" }}
                      value={securitycheck.clientAnswer}
                      onChange={(e) =>
                        setSecurityCheck({
                          ...securitycheck,
                          clientAnswer: e.target.value,
                        })
                      }
                    />
                    <p
                      style={{
                        color: "red",
                        fontSize: 15,
                        margin: 0,
                        display: securitycheck.human,
                      }}
                    >
                      We could not verify you are a human please try again
                    </p>
                  </label>
                  <br />
                  <br />
                  {loader ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <PropagateLoader color="#f4bb36" />
                    </div>
                  ) : (
                    <button
                      style={{
                        padding: 10,
                        border: "none",
                        backgroundColor: "#f4bb36",
                        color: "white",
                        width: "100%",
                        fontSize: 20,
                        fontWeight: "light",
                      }}
                      onClick={(e) => submitContactForm(e)}
                    >
                      SUBMIT
                    </button>
                  )}
                  {/* <button
                    style={{
                      padding: 10,
                      border: "none",
                      backgroundColor: "#f4bb36",
                      color: "white",
                      width: "100%",
                      fontSize: 20,
                      fontWeight: "light",
                    }}
                    onClick={(e) => submitContactForm(e)}
                  >
                    SUBMIT
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* MOBILE CONTACT AND INFO < 789 */}
        <section
          className="MobileBottomInfoContact"
          style={{
            display: "none",
            backgroundColor: "white",
            padding: "15px",
          }}
        >
          {/* MOBILE COMMERCIAL ELECTRICAL SERVICES */}
          <div style={{ color: "gray", fontSize: 12 }}>
            <img
              style={{ width: "100%", height: "275px" }}
              src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-wall.jpg"
              alt="Count on us for commercial electrical services"
            />
            <h1 style={{ color: "#1f40a3" }}>
              COUNT ON US FOR COMMERCIAL ELECTRICAL SERVICES
            </h1>
            <p>
              Do you own a business or commercial property in the Travis County
              area? Pritchard Electric provides commercial electrical services
              for:
            </p>
            <ul>
              <li>Office buildings</li>
              <li>Apartment complexes</li>
              <li>Retail shops and warehouses</li>
            </ul>
            <p>
              Keep business running smoothly. Contact Austin, TX's premier
              commercial electrician today at 512-252-4699. We serve customers
              throughout the surrounding areas. Remember to ask for a free
              estimate on equipment upgrades or any other electrical service.
            </p>
          </div>

          {/* MOBILE CONTACT FORM */}
          <ContactForm />
        </section>

        <Footer />
      </main>
    );
  }
  return null;
};

// Connect the Item to gain access to `state` as a prop
export default connect(Home);
