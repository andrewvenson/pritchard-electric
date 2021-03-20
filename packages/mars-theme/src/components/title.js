import React from "react";
import { Head, connect, decode } from "frontity";

const Title = ({ state }) => {
  // Get data about the current URL.
  const data = state.source.get(state.router.link);
  // Set the default title.
  let title = state.frontity.title;

  if (data.isHome) {
    title = `Residential & Commercial Electricians ${state.frontity.title}`;
  } else if (data.isContact) {
    title = `Contact an Electrician ${state.frontity.title}`;
  } else if (data.isGallery) {
    title = `Gallery ${state.frontity.title}`;
  } else if (data.isFaq) {
    title = `Electrical Service FAQs ${state.frontity.title}`;
  } else if (data.link == "/residential-electrical-services/") {
    title = `House Rewiring, Electrical Services ${state.frontity.title}`;
  } else if (data.link == "/electrical-panel-upgrades/") {
    title = `Electrical Panel Upgrade ${state.frontity.title}`;
  } else if (data.link == "/commercial-electrical-services/") {
    title = `Commercial Electrical Services ${state.frontity.title}`;
  } else if (data.link == "/lighting-services/") {
    title = `Lighting Services ${state.frontity.title}`;
  } else if (data.is404) {
    // Add titles to 404's.
    title = `404 Not Found - ${state.frontity.title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
