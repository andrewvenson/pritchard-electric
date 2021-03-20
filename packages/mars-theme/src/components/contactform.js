import React, { useState, useEffect } from "react";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

function ContactForm() {
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

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const answer = num1 + num2;
    setSecurityCheck({
      ...securitycheck,
      randomNum1: num1,
      randomNum2: num2,
      randomAnswer: answer,
    });
  }, []);

  const contactInput = {
    border: "1px solid lightgray",
    height: "30px",
    padding: "2px",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: "4px",
  };

  const contactSuggestions = {
    border: "1px solid lightgray",
    width: "100%",
    padding: "2px",
    backgroundColor: "whitesmoke",
    marginTop: "4px",
  };

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

  return (
    <form style={{ padding: "0px 15px 0px 15px" }}>
      <label>
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "15px" }}>
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
      <br />
      <label>
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "15px" }}>
          Phone <span style={{ color: "red" }}>*</span>
        </span>
        <br />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          style={{ ...contactInput }}
          value={contactvals.phone}
          onChange={(e) =>
            setContactVals({ ...contactvals, phone: e.target.value })
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
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "15px" }}>
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
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "15px" }}>
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
        <span style={{ color: "gray", fontWeight: "bold", fontSize: "15px" }}>
          Security Check <span style={{ color: "red" }}>*</span>
        </span>
        <br />
        <span>{securitycheck.randomNum1}</span>
        <span> + </span>
        <span style={{ marginRight: "5px" }}>{securitycheck.randomNum2} =</span>
        <input
          type="text"
          style={{ ...contactInput, width: "200px" }}
          value={securitycheck.clientAnswer}
          onChange={(e) =>
            setSecurityCheck({ ...securitycheck, clientAnswer: e.target.value })
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
    </form>
  );
}

export default ContactForm;
