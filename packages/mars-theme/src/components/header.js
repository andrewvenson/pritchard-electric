import React from "react";
import { connect, styled } from "frontity";
import BluePhone from "../static/images/bluecall.png";
import Menu from "../static/images/list.png";
import More from "../static/images/add.png";
import Mail from "../static/images/mail.png";
import Facebook from "../static/images/facebook-circular-logo.png";
import Fax from "../static/images/fax.png";
import Link from "./link";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  const Container2 = styled.div`
    width: 1000px;
    max-width: 100%;
    box-sizing: border-box;
    display: none;
    padding: 10px 10px 0px 10px;
    flex-direction: column;
    justify-content: space-around;
  `;

  const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 15px 10px 0px 10px;
    flex-direction: column;
    justify-content: space-around;
  `;

  return (
    <>
      <Container className="desktopHeader">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            className="desktopTelephone"
            href="tel:+1-512-252-4699"
            title="(512) 252-4699"
            style={{
              color: "#1f40a3",
              display: "flex",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <img src={BluePhone} width="18px" height="18px" />
            </span>
            <span>(512) 252-4699</span>
          </a>
          <a className="mobileMenu" style={{ display: "none" }}>
            <img src={Menu} width="20px" height="20px" />
          </a>
          <div
            className="desktopSocials"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href="http://www.facebook.com/pages/category/Electrician/Pritchard-Electric-139403462895904/"
              title="Facebook"
              target="_blank"
            >
              <img
                style={{ marginRight: "8px" }}
                width="20px"
                height="20px"
                src={Facebook}
              />
            </a>
            <a
              href="mailto:?subject=Check out Pritchard Electric%2C LLC&amp;body=I thought you%27d be interested in this site%3A%0Ahttp%3A%2F%2Fpritchardelectric.net%2F"
              title="Send to a Friend"
              target="_blank"
              class="email_icon"
            >
              <img
                style={{ marginRight: "8px" }}
                width="20px"
                height="20px"
                src={Mail}
              />
            </a>
            <a href="javascript:window.print()" title="Print This Page">
              <img width="20px" height="20px" src={Fax} />
            </a>
          </div>
          <a className="mobileSocials" style={{ display: "none" }}>
            <img width="20px" height="20px" src={More} />
          </a>
        </div>
        <StyledLink link="/">
          <Title
            style={{ justifyContent: "center", display: "flex", margin: "0px" }}
          >
            <img
              src={
                "http://pritchardelectric.net/files/2019/01/394765_139812716188312_1908785223_n.png"
              }
              style={{ width: "325px", height: "125px" }}
            />
          </Title>
        </StyledLink>
        <MobileMenu />
      </Container>

      <Container2 className="mobileHeader">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a>
            <img src={Menu} width="20px" height="20px" />
          </a>
          <StyledLink link="/">
            <Title
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "0px",
              }}
            >
              <img
                src={
                  "http://pritchardelectric.net/files/2019/01/394765_139812716188312_1908785223_n.png"
                }
                style={{ width: "77.41px", height: "35px" }}
              />
            </Title>
          </StyledLink>
          <a>
            <img width="20px" height="20px" src={More} />
          </a>
        </div>
      </Container2>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

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
