import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
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
          boxShadow: "3px 4px 8px black",
        }}
      >
        <Nav />
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
  }

  @media screen and (max-width: 789px) {
    .MobileBottomInfoContact {
      display: block !important;
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
