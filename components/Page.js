// import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size:62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 1em;
    margin:0px;
    font-size: 1.5rem;
    font-family:'Alegreya', sans-serif;
    line-height:2;
    background-color: #fae6cf;
    color: #1F4797 ;
    position:relative;
  }
  a {
    text-decoration: none;
    color: #1F4797;
  }

`;

const InnerStyles = styled.div`
  margin: auto;
`;

export default function Page({ children }) {
  console.log(children);
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
