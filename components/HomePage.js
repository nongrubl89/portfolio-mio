import { useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioTicker from './PortfolioTicker';

const Title1 = styled(motion.div)`
  align-items: center;
  padding: 1em;
  display: grid;
  align-content: center;
  height: 90%;
  font-size: 1.5rem;
  /* width: 75%; */
  h2 {
    font-family: 'Archivo', sans-serif;
    margin-bottom: 0;
  }
  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    border: none;
    font-size: 3rem;
    /* margin-left: 2em; */
    height: 85%;
  }
`;
const Line = styled.hr`
  border: black 1px solid;
`;
const Container = styled.div`
  justify-content: center;
  min-height: 100vh;
  display: grid;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    text-align: right;
  }
`;

export default function AnimatedTitle() {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
    }
    if (!inView) {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <>
      <Container>
        <Title1
          ref={ref}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
          bbottom
          aitems="bottom"
          mbottom="0"
          bright
        >
          <h2>
            I&apos;m a San Diego based web developer with a focus on front-end
            technologies.
          </h2>
          <h3>
            I love bringing good design to life with logic, creativity and code.
          </h3>
        </Title1>
      </Container>
      <PortfolioTicker />
    </>
  );
}
