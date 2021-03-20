import React from "react";
import Link from "./link";

const NotificationModal = ({ showNotificationModal, notificationmodal }) => {
  return (
    <>
      <div
        onClick={() => showNotificationModal(!notificationmodal)}
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
            top: "100px",
            borderRadius: "5px",
            width: "80vw",
            // height: "350px",
            padding: "0px 30px 0px 30px",
            zIndex: "99999999999",
            border: "5px solid #1f40a3",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="notificationLogo"
              src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/logo.png"
              style={{ width: 250, height: 100, marginTop: "10px" }}
            />
          </div>
          <p
            style={{
              color: "gray",
              cursor: "pointer",
              position: "absolute",
              top: -5,
              right: 30,
            }}
            onClick={() => showNotificationModal(!notificationmodal)}
          >
            X
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // marginTop: "10px",
              textAlign: "center",
            }}
          >
            <p className="notificationText">
              Pritchard Electric is thinking of the Austin, Texas community and
              the effects of COVID-19. We hope to aid the community as much as
              possible to help the public band together to get through this
              time.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              className="notificationButton"
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: "20px",
                fontWeight: "light",
                margin: "10px",
                textAlign: "center",
              }}
              onClick={() => showNotificationModal(!notificationmodal)}
              link="/contact"
            >
              CONTACT US
            </Link>

            <div
              className="notificationButton"
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: "20px",
                fontWeight: "light",
                margin: "10px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => showNotificationModal(!notificationmodal)}
            >
              CONTINUE TO WEBSITE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;
