/* eslint-disable react-hooks/exhaustive-deps */
// import PropTypes from "prop-types";
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
// import Navbar from './Navbar';

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
    padding: 0;
    margin:0px;
    font-size: 1.5rem;
    line-height:1.5;
    color: black;
    background-color: ${(props) => props.color};;
    height:100%;
    transition: background-color 2s ease;
    position: absolute;
    width:100vw;
    overflow-x: hidden;
  }

  #__next {
    height: 100%; position: relative;
}

  a {
    text-decoration: none;
    color: black;
    font-family: "Archivo" sans-serif;
  }

`;

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setColor] = useState('#eeea77');
  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
    if (scrollPosition >= 100 && scrollPosition <= 800) {
      setColor('#1a62a3');
    }
    if (scrollPosition <= 100) {
      setColor('#eeea77');
    }
    if (scrollPosition >= 800) {
      setColor('#9678B6');
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
