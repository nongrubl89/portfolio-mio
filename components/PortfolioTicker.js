import styled, { keyframes } from 'styled-components';
import { useAnimation, motion, color } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const ticker = keyframes` 
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
  `;

const TickerContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 100%;
  box-sizing: content-box;
  position: absolute;
  height: 100%;
`;
const Ticker = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  animation-name: ${ticker};
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const TickerItem = styled.h1`
  display: inline-block;
  padding: 0 1rem;
  font-size: 10vw;
  font-family: 'Archivo', sans-serif;
  animation-delay: ${(props) => props.animationDelay};
`;

export default function PortfolioTicker() {
  const colorAnimation = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const colorSetter = {
    brown: {
      backgroundColor: `brown`,
    },
    black: {
      backgroundColor: `black`,
    },
  };

  //   useEffect(() => {
  //     if (inView1) {
  //       colorAnimation.start('black');
  //     }
  //     if (!inView1) {
  //       colorAnimation.start('brown');
  //     }
  //   }, []);
  return (
    <TickerContainer ref={ref1} animate={colorAnimation} variants={colorSetter}>
      <Ticker>
        <TickerItem animationDelay="15s">
          Portfolio Portfolio Portfolio Portfolio Portfolio
        </TickerItem>
        <TickerItem animationDelay="0s">
          Portfolio Portfolio Portfolio Portfolio Portfolio
        </TickerItem>
      </Ticker>
    </TickerContainer>
  );
}
