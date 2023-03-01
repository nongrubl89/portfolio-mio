// import PropTypes from "prop-types";
import styled, { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
// import Navbar from './Navbar';
import HomePage from './HomePage';
import PortfolioTicker from './PortfolioTicker';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 1em;
    margin:0px;
    font-size: 1.5rem;
    line-height:1.5;
    color: black;
    background-color: ${(props) => props.color};;
    position:relative;
    min-height:100%;
    transition: background-color 2s ease;
    overflow-x:hidden;
  }
  a {
    text-decoration: none;
    color: #1F4797;
  }

`;

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setColor] = useState('#eeea77');
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition >= 100) {
      setColor('#1a62a3');
    }
    if (scrollPosition <= 100) {
      setColor('#eeea77');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <GlobalStyles color={color} />
      {/* <HomePage />
      <PortfolioTicker /> */}
      {children}
    </>
  );
}
