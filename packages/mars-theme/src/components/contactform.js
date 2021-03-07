import React from "react";
import ServicesTab from "./servicestab";

function ContactForm() {
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

  return (
    <form style={{ width: "100%" }}>
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Name <span style={{ color: "red" }}>*</span>
        </span>
        <br />

        <div style={{ display: "flex" }}>
          <label>
            <input type="text" style={{ ...contactInput }} />
            <span style={{ fontSize: 12, color: "gray" }}>First</span>
          </label>

          <label style={{ marginLeft: "15px" }}>
            <input type="text" style={{ ...contactInput }} />
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
        <input type="phone" style={{ ...contactInput }} />
      </label>
      <br />
      <br />
      <label>
        <span style={{ color: "gray", fontWeight: "bold" }}>
          Email <span style={{ color: "red" }}>*</span>
        </span>
        <br />
        <input type="email" style={{ ...contactInput }} />
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
      >
        SUBMIT
      </button>
    </form>
  );
}

export default ContactForm;
