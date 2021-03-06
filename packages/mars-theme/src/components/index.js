import React, { useState, useEffect } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Home from "./home";
import Contact from "./contact";
import Faq from "./faq";
import Gallery from "./gallery";
import Title from "./title";
import PageError from "./page-error";
import Nav from "./nav";
import SideNav from "./sidenav";
import MobileNav from "./mobilenav";
import Electrical from "./services/electrical-panel-upgrades";
import Commercial from "./services/commercial-electrical-services";
import Lighting from "./services/lighting-services";
import Residential from "./services/residential-electrical-services";
import SocialModal from "./social-modal";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const [sidenav, setSideNav] = useState(false);
  const [socialmodal, showSocialModal] = useState(false);
  const [notificationmodal, showNotificationModal] = useState(false);

  const globalStyles = css`
    body {
      margin: 0;
      font-family: "Roboto Condensed", sans-serif;
      overflow-y: ${sidenav || socialmodal || notificationmodal
        ? "hidden"
        : "scroll"};
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

    @media screen and (max-width: 777px) {
      .servicesDesktopWidth {
        display: none !important;
      }
    }

    @media screen and (max-width: 777px) {
      .services1060Width {
        display: block !important;
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
      .service h1 {
        font-size: 18px !important;
      }
      .service {
        font-size: 18px !important;
      }
      .goto {
        font-size: 13px !important;
      }
      .text p {
        font-size: 12px !important;
      }
      .notificationButton {
        font-size: 12px !important;
        padding: 5px !important;
      }
      .notificationLogo {
        width: 200px !important;
        height: 75px !important;
      }
      .notificationText {
        font-size: 12px !important;
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

    .serviceTab a:hover {
      color: #f4bb36;
    }

    .sideNav div a:hover {
      color: #f4bb36;
    }

    .margin0 {
      margin: 0px !important;
    }

    .marginbottom0 {
      margin-bottom: 0px !important;
    }
  `;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <SideNav sidenav={sidenav} setSideNav={setSideNav} />
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      {/* Add the header of the site. */}
      <HeadContainer>
        <Header
          sidenav={sidenav}
          setSideNav={setSideNav}
          socialmodal={socialmodal}
          showSocialModal={showSocialModal}
        />
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
      <MobileNav />

      {socialmodal && (
        <SocialModal
          socialmodal={socialmodal}
          showSocialModal={showSocialModal}
        />
      )}

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
          <Home
            when={data.isHome}
            showNotificationModal={showNotificationModal}
            notificationmodal={notificationmodal}
          />
          <Contact when={data.isContact} />
          <Faq when={data.isFaq} />
          <Gallery when={data.isGallery} />
          <Residential when={data.isResidential} />
          <Commercial when={data.isCommercial} />
          <Lighting when={data.isLighting} />
          <Electrical when={data.isElectrical} />
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
