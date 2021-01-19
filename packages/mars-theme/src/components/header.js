import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <a href="tel:+1-512-252-4699" title="(512) 252-4699" style={{color: "navy", fontWeight: "bold"}}>(512) 252-4699</a>
          <div style={{display: "flex", justifyContent: "center"}}>
            <p style={{margin: 0}}>F</p>
            <p style={{margin: 0}}>M</p>
            <p style={{margin: 0}}>F</p>
          </div>
        </div>
        <StyledLink link="/">
          <Title style={{justifyContent: "center", display: "flex", margin: "0px"}}><img src={"http://pritchardelectric.net/files/2019/01/394765_139812716188312_1908785223_n.png"} style={{width: "325px", height: "125px"}}/></Title>
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <MobileMenu />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  padding-top: 15px;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
