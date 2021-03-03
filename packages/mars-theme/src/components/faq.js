import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "./footer";

const Faq = ({ state, actions }) => {
  //useEffect(() => {
  //actions.source.fetch("/home-post", { force: true });
  //}, []);

  //const data = state.source.get("/home-post/");

  //   if (data.isPost) {
  //     const category = state.source.post[data.id];
  //     const firstHeader = category.content.rendered;

  return (
    <main style={{ width: "100%" }}>
      <h1>FAQ</h1>
      <Footer />
    </main>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Faq);
