import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import axios from "axios";
import Footer from "./footer";
import Galleri from "react-grid-gallery";
import Link from "./link";

function Gallery({ state, actions }) {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const data = axios
      .get("https://manage.pritchardelectric.net/wp-json/wp/v2/media")
      .then((response) => {
        setGallery(
          response.data
            .filter((item, key) => {
              return item.title.rendered.includes("gallery");
            })
            .map((item, key) => {
              return {
                src: item.source_url,
                thumbnail: item.source_url,
                thumbnailWidth: 400,
                thumbnailHeight: 212,
              };
            })
        );
      });
  }, []);

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
            <Galleri images={gallery} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

// Connect the Item to gain access to `state` as a prop
export default connect(Gallery);
