import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import YellowPhone from "../static/images/call.png";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Home from "./home";
import Title from "./title";
import PageError from "./page-error";
import Nav from "./nav";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const [sidenav, setSideNav] = useState(false);

  const globalStyles = css`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow-y: ${sidenav ? "hidden" : "visible"};
    }
    a,
    a:visited {
      color: inherit;
      text-decoration: none;
    }
    section > h1 > p {
      margin: 0;
    }

    @media screen and (max-width: 1086px) {
      .desktopView {
        display: none !important;
      }
    }

    @media screen and (max-width: 1086px) {
      .mobileView {
        display: block !important;
      }
    }

    @media screen and (max-width: 560px) {
      .mobile560View {
        display: block !important;
      }
      .mobileView {
        display: none !important;
      }
    }

    @media screen and (max-width: 789px) {
      .BottomInfoContact {
        display: none !important;
      }

      .desktopNav {
        display: none !important;
      }

      .desktopSocials {
        display: none !important;
      }

      .desktopTelephone {
        display: none !important;
      }

      .desktopWorkspaceText {
        display: none !important;
      }
    }

    @media screen and (max-width: 789px) {
      .MobileBottomInfoContact {
        display: block !important;
      }
      .mobileNav {
        display: flex !important;
      }

      .mobileSocials {
        display: block !important;
      }

      .mobileMenu {
        display: block !important;
      }

      .mobileWorkspaceText {
        display: block !important;
      }
    }

    @media screen and (max-width: 1075px) {
      .CallElectricianTime {
        display: none !important;
      }
      .desktopWorkspace {
        display: none !important;
      }
    }

    @media screen and (max-width: 1075px) {
      .MobileCallElectricianTime {
        display: flex !important;
      }
      .mobileWorkspace {
        display: flex !important;
      }
    }

    @media screen and (max-width: 556px) {
      .CallElectricianTime {
        display: none !important;
      }
      .MobileCallElectricianTime {
        display: none !important;
      }
    }

    @media screen and (max-width: 556px) {
      .Mobile556CallElectricianTime {
        display: flex !important;
      }
    }

    @media screen and (max-width: 545px) {
      .desktopFooter {
        display: none !important;
      }
      .desktopHeader {
        display: none !important;
      }
    }

    @media screen and (max-width: 545px) {
      .mobileFooter {
        display: block !important;
      }
      .mobileHeader {
        display: flex !important;
      }
    }
  `;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <div
        className="sideNav"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 280,
          height: "100vh",
          backgroundColor: "#1f40a3",
          zIndex: "999999",
          display: sidenav ? "flex" : "none",
          flexDirection: "column",
          color: "white",
          padding: 10,
          fontStyle: "uppercase",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              right: 10,
              top: 0,
              cursor: "pointer",
            }}
            onClick={() => {
              setSideNav(!sidenav);
            }}
          >
            X
          </div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <a>Home</a>
        </div>
        <div style={{ marginBottom: 10 }}>
          <div style={{ marginBottom: 10 }}>
            <a>Services {`>`}</a>
          </div>
          <div style={{ paddingLeft: 25 }}>
            <div style={{ marginBottom: 10 }}>
              <a>Residential Electrical Services</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <a>Electrical Panel Upgrades</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <a>Commercial Electrical Services</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <a>Lighting Services</a>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <a>Gallery</a>
        </div>
        <div style={{ marginBottom: 10 }}>
          <a>FAQ</a>
        </div>
        <div style={{ marginBottom: 10 }}>
          <a>Contact</a>
        </div>
      </div>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header sidenav={sidenav} setSideNav={setSideNav} />
      </HeadContainer>

      <div
        style={{
          backgroundColor: "#1f40a3",
          display: "flex",
          justifyContent: "center",
          padding: "15px",
        }}
        className="desktopNav"
      >
        <Nav />
      </div>

      <div
        style={{
          backgroundColor: "white",
          display: "none",
          justifyContent: "center",
          padding: "15px",
          boxShadow: "inset 0 8px 8px -6px lightgray",
          borderBottom: "1px solid lightgray",
          color: "#f4bb36",
        }}
        className="mobileNav"
      >
        <a
          href="tel:+1-512-252-4699"
          title="(512) 252-4699"
          style={{
            color: "#f4bb36",
            display: "flex",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          <span style={{ marginRight: "5px" }}>
            <img src={YellowPhone} width="18px" height="18px" />
          </span>
          <span>(512) 252-4699</span>
        </a>
      </div>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
          <Home when={data.isHome} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
