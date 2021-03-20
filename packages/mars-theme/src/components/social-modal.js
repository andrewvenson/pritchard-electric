import React from "react";
import Link from "./link";
import Mail from "../static/images/mail.png";
import Facebook from "../static/images/facebook-circular-logo.png";
import Fax from "../static/images/fax.png";

const SocialModal = ({ showSocialModal, socialmodal }) => {
  return (
    <>
      <div
        onClick={() => showSocialModal(!socialmodal)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          width: "100%",
          height: "150vh",
          position: "absolute",
          zIndex: "9999999",
          top: 0,
        }}
      ></div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: "25px",
            borderRadius: "5px",
            width: "90vw",
            height: "400px",
            zIndex: "99999999999",
            borderBottom: "5px solid #1f40a3",
          }}
        >
          <div
            style={{
              backgroundColor: "#1f40a3",
              height: "45px",
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <h2 style={{ color: "white", margin: "0px" }}>Follow Us</h2>
            <h2
              onClick={() => showSocialModal(!socialmodal)}
              style={{ color: "white", margin: "0px", cursor: "pointer" }}
            >
              X
            </h2>
          </div>
          <div style={{ borderBottom: "1px solid lightgray", padding: "5px" }}>
            <strong
              style={{
                color: "#1f40a3",
                fontSize: "14px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <a
                href="https://www.facebook.com/pages/category/Electrician/Pritchard-Electric-139403462895904/"
                title="Facebook"
                target="_blank"
              >
                <img
                  style={{ marginRight: "8px" }}
                  width="20px"
                  height="20px"
                  src={Facebook}
                />
              </a>
              <a
                href="https://www.facebook.com/pages/category/Electrician/Pritchard-Electric-139403462895904/"
                title="Facebook"
                target="_blank"
              >
                <span>Facebook</span>
              </a>
            </strong>
          </div>
          <div style={{ borderBottom: "1px solid lightgray", padding: "5px" }}>
            <strong
              style={{
                color: "#1f40a3",
                fontSize: "14px",

                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <a
                href="mailto:?subject=Check out Pritchard Electric%2C LLC&amp;body=I thought you%27d be interested in this site%3A%0Ahttp%3A%2F%2Fpritchardelectric.net%2F"
                title="Send to a Friend"
                target="_blank"
              >
                <img
                  style={{ marginRight: "8px" }}
                  width="20px"
                  height="20px"
                  src={Mail}
                />
              </a>
              <a
                href="mailto:?subject=Check out Pritchard Electric%2C LLC&amp;body=I thought you%27d be interested in this site%3A%0Ahttp%3A%2F%2Fpritchardelectric.net%2F"
                title="Send to a Friend"
                target="_blank"
              >
                <span>Send to a Friend</span>
              </a>
            </strong>
          </div>
          <div style={{ borderBottom: "1px solid lightgray", padding: "5px" }}>
            <strong
              style={{
                color: "#1f40a3",
                fontSize: "14px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <a
                onClick={() => window.print()}
                style={{ cursor: "pointer" }}
                title="Print This Page"
              >
                <img
                  width="20px"
                  height="20px"
                  style={{ marginRight: "8px" }}
                  src={Fax}
                />
              </a>
              <a
                onClick={() => window.print()}
                style={{ cursor: "pointer" }}
                title="Print This Page"
              >
                <span>Print This Page</span>
              </a>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialModal;
