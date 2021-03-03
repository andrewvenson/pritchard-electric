import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "./footer";

const Gallery = ({ state, actions }) => {
  //useEffect(() => {
  //actions.source.fetch("/home-post", { force: true });
  //}, []);

  //const data = state.source.get("/home-post/");

  //   if (data.isPost) {
  //     const category = state.source.post[data.id];
  //     const firstHeader = category.content.rendered;

  return <h1>Gallery</h1>;
};

// Connect the Item to gain access to `state` as a prop
export default connect(Gallery);
