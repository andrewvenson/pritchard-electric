import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "./footer";
import Galleri from "react-grid-gallery";
import Link from "./link";

function Gallery({ state, actions }) {
  //useEffect(() => {
  //actions.source.fetch("/home-post", { force: true });
  //}, []);

  //const data = state.source.get("/home-post/");

  //   if (data.isPost) {
  //     const category = state.source.post[data.id];
  //     const firstHeader = category.content.rendered;

  const IMAGES = [
    {
      src:
        "http://pritchardelectric.net/files/2019/01/394765_139812716188312_1908785223_n_1_.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/394765_139812716188312_1908785223_n_1_.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/11219309_498625093640404_8661194484712942164_n.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/11223579_490264237809823_7210810231468267911_o.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/11226912_533966266772953_2451784909899282063_n.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/11780048_520027718166808_8148905086326766674_o.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/11870665_498624920307088_2661147460171180406_n.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/12309723_533963856773194_6494885025188887892_o.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "http://pritchardelectric.net/files/2019/01/12374815_533962513439995_1319413800049393160_o.jpg?w=316&h=237&a=t",
      thumbnailWidth: 400,
      thumbnailHeight: 212,
    },
  ];

  return (
    <main
      style={{
        width: "100%",

        boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <section style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "980px", textAlign: "center", padding: 20 }}>
          <h1 style={{ color: "#f4bb36", marginTop: 25 }}>GALLERY</h1>
          <h3 style={{ color: "#1f40a3" }}>CLICK TO ENLARGE</h3>
          <Link
            style={{
              padding: 10,
              border: "none",
              backgroundColor: "#f4bb36",
              color: "white",
              fontSize: "15px",
              fontWeight: "light",
              display: "block",
            }}
            link="/contact"
          >
            CONTACT US ›
          </Link>

          <div style={{ marginTop: 50 }}>
            <Galleri images={IMAGES} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

// Connect the Item to gain access to `state` as a prop
export default connect(Gallery);
