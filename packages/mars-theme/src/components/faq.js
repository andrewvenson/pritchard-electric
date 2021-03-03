import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "./footer";
import FAQ from "react-faq-component";

const Faq = ({ state, actions }) => {
  //useEffect(() => {
  //actions.source.fetch("/home-post", { force: true });
  //}, []);

  //const data = state.source.get("/home-post/");

  //   if (data.isPost) {
  //     const category = state.source.post[data.id];
  //     const firstHeader = category.content.rendered;
  const data = {
    title: "FAQs",
    rows: [
      {
        title: "When should I consider calling an electrician?",
        content: (
          <p>
            When your life and well being is more valuable than your money. Of
            all the types of work that can have hazardous effects, immediate and
            unexpected. The electrical field is the most dangerous. Electrical
            grounding and GFCI protection is probably the most misunderstood and
            critical at the same time.
          </p>
        ),
      },
      {
        title: "Why would I need a new electrical circuit?",
        content: (
          <p>
            If you are adding equipment that has a large electrical demand it
            may require its own circuit.
          </p>
        ),
      },
      {
        title: "What do I do if my circuit keeps overloading?",
        content: (
          <p>
            Confirm the electrical demand of each item on that circuit. It may
            be as easy as moving an item to another location and plugging in to
            another circuit. If you find that is not an option then a new
            circuit to split the load may be necessary."
          </p>
        ),
      },
      {
        title:
          "I have too many power strips behind my entertainment center and want to reduce the clutter. How can Pritchard Electric help me?",
        content: (
          <p>
            The best course of action would be to add receptacles in the desired
            locations to reduce cords. It would also be a good idea to add a
            surge protection device in the electrical panel to provide the surge
            protection that the power strip may be providing.
          </p>
        ),
      },
      {
        title: "Can you change an existing switch to a dimmer switch?",
        content: (
          <p>
            In most cases you can change an existing switch to a dimmer switch
            with no work on the wiring. The exception would be if the dimmer
            needs a neutral wire and it is not available in the switch box.
          </p>
        ),
      },
      {
        title: "Why is a breaker in my panel feel hot to touch?",
        content: (
          <p>
            If a breaker in your panel is hot to the touch the first thing to do
            is read the amps on the wire connected to that breaker to determine
            if the breaker is nearing overload. They can operate at 80% of
            maximum load for an extended period of time with no other adverse
            effects than the breaker feeling warm. If hot enough you can't leave
            your finger on it a loose connection or a bad connection between the
            breaker and the buss bar may be the problem.
          </p>
        ),
      },
      {
        title:
          "How can I tell when an electrical outlet is not safe or needs to be replaced?",
        content: (
          <p>
            If you plug into an electrical outlet and it is loose it should be
            replaced. If the power is intermittent it is probably loose and
            loose connections cause heat and heat can cause a fire.
          </p>
        ),
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "#1f40a3",
    rowTitleColor: "#1f40a3",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <main
      style={{
        width: "100%",
        boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px",
          marginTop: "50px",
        }}
      >
        <div style={{ width: "980px" }}>
          <FAQ data={data} styles={styles} config={config} />
        </div>
      </section>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </main>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Faq);
