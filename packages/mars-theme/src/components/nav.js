import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  const [dropdown, showDropdown] = useState(false);
  return (
    <NavContainer>
      {state.theme.menu.map(([name, link]) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        //const isCurrentPage = true;
        return (
          <NavItem key={name}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            {link === "/services/" ? (
              <>
                <a
                  onMouseEnter={() => {
                    showDropdown(true);
                  }}
                  onMouseLeave={() => {
                    showDropdown(false);
                  }}
                >
                  SERVICES ›
                </a>
                <div
                  onMouseOver={() => {
                    showDropdown(true);
                  }}
                  onMouseLeave={() => {
                    showDropdown(false);
                  }}
                  style={{
                    padding: 10,
                    borderRadius: "3px",
                    width: 150,
                    position: "absolute",
                    backgroundColor: "#1f40a3",
                    display: dropdown ? "block" : "none",
                  }}
                >
                  <a href="#">Residential Electrical Services</a>
                  <br />
                  <br />
                  <a href="#">Electrical Panel Upgrades</a>
                  <br />
                  <br />
                  <a href="#">Commercial Electrical Services</a>
                  <br />
                  <br />
                  <a href="#">Lighting Services</a>
                  <br />
                  <br />
                </div>
              </>
            ) : (
              <Link
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {name}
              </Link>
            )}
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  color: #fff;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #f4bb36;
      color: #f4bb36;
    }
  }

  &:hover > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    border-bottom-color: #f4bb36;
    color: #f4bb36;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
