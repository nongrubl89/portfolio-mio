import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Link from "next/link";

const Bar = styled.nav`
  font-size: 18px;
  background-color: none;
  padding-bottom: 10px;
  position: relative;
  z-index: 500;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
    justify-content: flex-end;
  }
`;
const Logo = styled.div`
  display: inline-block;
  font-size: 22px;
  top: 0px;
  left: 20px;
  height: 120px;
  width: 120px;
  position: absolute;
  z-index: 1000;
`;
const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;
const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;
const NavBarToggle = styled.span`
  position: fixed;
  z-index: 500;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: #1f4797;
  font-size: 24px;
`;
const Hamburger = styled.div`
  @media (min-width: 768px) {
    display: none;
    position: static;
  }
`;
const BlobStyle = styled.svg`
  position: relative;
  top: 0px;
  left: 0px;
`;

export default function Navbar() {
  const [displayNav, setDisplayNav] = useState("none");

  const toggleNavBar = () => {
    displayNav === "none" ? setDisplayNav("flex") : setDisplayNav("none");
  };
  return (
    <>
      <Logo>
        <Link href="/">
          <BlobStyle viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#1f4797"
              d="M64,-16C72.5,5.5,61.8,37.9,40.5,52.6C19.2,67.4,-12.7,64.4,-36.8,47.6C-60.9,30.8,-77.3,0.2,-69.9,-19.7C-62.4,-39.7,-31.2,-48.9,-1.7,-48.3C27.7,-47.8,55.4,-37.4,64,-16Z"
              transform="translate(100 170)"
            />
          </BlobStyle>
        </Link>
      </Logo>
      <Bar>
        <NavBarToggle onClick={() => toggleNavBar()}>
          <Hamburger>
            {" "}
            <FontAwesomeIcon
              icon={faBars}
              style={{
                fontSize: 25,
                color: "#1F4797",
              }}
            />
          </Hamburger>
        </NavBarToggle>
        <MainNav display={displayNav}>
          <NavLi>
            <NavLink href="#">Projects</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="/contact">Contact</NavLink>
          </NavLi>
        </MainNav>
      </Bar>
    </>
  );
}
