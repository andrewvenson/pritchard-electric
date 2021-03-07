import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "./footer";
import ContactForm from "./contactform";

const Contact = ({ state, actions }) => {
  //useEffect(() => {
  //actions.source.fetch("/home-post", { force: true });
  //}, []);

  //const data = state.source.get("/home-post/");

  //   if (data.isPost) {
  //     const category = state.source.post[data.id];
  //     const firstHeader = category.content.rendered;

  const margin0 = {
    margin: 0,
  };

  return (
    <main
      style={{
        boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <article
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0px 20px 0px 20px",
        }}
      >
        <div
          style={{
            padding: "30px",
            width: "90%",
            backgroundColor: "#1f40a3",
            marginTop: "50px",
            maxWidth: "980px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
          }}
        >
          <strong>Pritchard Electric, LLC</strong>
          <p>Austin, TX 78754</p>
          <strong>Call Us</strong>
          <p style={margin0}>Phone: (512) 252-4699</p>
          <br />
          <strong>Hours</strong>
          <p style={margin0}>Service calls after hours can be done</p>
          <p style={margin0}>Mon: 8:00AM-5:00PM</p>
          <p style={margin0}>Tue: 8:00AM-5:00PM</p>
          <p style={margin0}>Wed: 8:00AM-5:00PM</p>
          <p style={margin0}>Thu: 8:00AM-5:00PM</p>
          <p style={margin0}>Fri: 8:00AM-5:00PM</p>
          <p style={margin0}>Sat: Closed</p>
          <p style={margin0}>Sun: Closed</p>
        </div>
      </article>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{ textAlign: "center", maxWidth: "980px", padding: "20px" }}
        >
          <h2
            style={{
              margin: 0,
              color: "#1f40a3",
            }}
          >
            FIND AN ELECTRICIAN IN AUSTIN, TX
          </h2>
          <h3
            style={{
              margin: 0,
              color: "#1f40a3",
            }}
          >
            MAKE US YOUR GO-TO ELECTRIC REPAIR COMPANY
          </h3>
          <p style={{ color: "gray" }}>
            Thank you for visiting our website. Pritchard Electric, LLC offers a
            wide range of electrical services in the Austin, TX area. We handle
            residential and commercial upgrades, retrofits, repairs and
            installations. No job is too large or too unusual for our team to
            tackle.
          </p>
          <p style={{ color: "gray" }}>
            Please use the form on this page to email us.
          </p>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            padding: "20px",
            width: "980px",
          }}
        >
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Contact);