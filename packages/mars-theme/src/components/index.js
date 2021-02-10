import React from "react";
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

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
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

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  }

  @media screen and (max-width: 789px) {
    .MobileBottomInfoContact {
      display: block !important;
    }
    .mobileNav {
      display: flex !important;
    }
  }

  @media screen and (max-width: 1075px) {
    .CallElectricianTime {
      display: none !important;
    }
  }

  @media screen and (max-width: 1075px) {
    .MobileCallElectricianTime {
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

    @media screen and (max-width: 545px) {
      .desktopFooter {
        display: none !important;
      }
    }

    @media screen and (max-width: 545px) {
      .mobileFooter {
        display: block !important;
      }
    }
  }
`;

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
