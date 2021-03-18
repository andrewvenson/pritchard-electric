import React, { useState } from "react";
import axios from "axios";
import contact from "./contact";

function ContactForm() {
  const [contactvals, setContactVals] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const submitContactForm = (e) => {
    e.preventDefault();

    if (
      contactvals.firstname !== "" &&
      contactvals.lastname !== "" &&
      contactvals.email !== "" &&
      contactvals.phone !== "" &&
      contactvals.message !== ""
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
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form style={{ width: "100%" }}>
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Name <span style={{ color: "red" }}>*</span>
        </span>
        <br />

        <div style={{ display: "flex" }}>
          <label>
            <input
              type="text"
              style={{ ...contactInput }}
              value={contactvals.firstname}
              onChange={(e) =>
                setContactVals({ ...contactvals, firstname: e.target.value })
              }
            />
            <span style={{ fontSize: 12, color: "gray" }}>First</span>
          </label>

          <label style={{ marginLeft: "15px" }}>
            <input
              type="text"
              style={{ ...contactInput }}
              value={contactvals.lastname}
              onChange={(e) =>
                setContactVals({ ...contactvals, lastname: e.target.value })
              }
            />
            <span style={{ fontSize: 12, color: "gray" }}>Last</span>
          </label>
        </div>
      </label>
      <br />
      <br />
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Phone <span style={{ color: "red" }}>*</span>
        </span>
        <br />
        <input
          type="phone"
          style={{ ...contactInput }}
          value={contactvals.phone}
          onChange={(e) =>
            setContactVals({ ...contactvals, phone: e.target.value })
          }
        />
      </label>
      <br />
      <br />
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Email <span style={{ color: "red" }}>*</span>
        </span>
        <br />
        <input
          type="email"
          style={{ ...contactInput }}
          value={contactvals.email}
          onChange={(e) =>
            setContactVals({ ...contactvals, email: e.target.value })
          }
        />
      </label>
      <br />
      <br />
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Message/Suggestions <span style={{ color: "red" }}>*</span>
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
            setContactVals({ ...contactvals, message: e.target.value })
          }
        />
      </label>
      <br />
      <br />
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Security Check <span style={{ color: "red" }}>*</span>
        </span>
      </label>
      <br />
      <br />
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
    </form>
  );
}

export default ContactForm;
