import React, { useState } from "react";
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
      // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      //   "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-family: "Montserrat", sans-serif;
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

    .serviceTab a:hover {
      color: #f4bb36;
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
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <SideNav sidenav={sidenav} setSideNav={setSideNav} />

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

      <MobileNav />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
          <Home when={data.isHome} />
          <Contact when={data.isContact} />
          <Faq when={data.isFaq} />
          <Gallery when={data.isGallery} />
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
