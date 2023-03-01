import { useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioTicker from './PortfolioTicker';

const Title1 = styled(motion.h2)`
  font-size: 3rem;
  font-weight: ${(props) => props.fweight};
  /* max-width: 400px; */
  font-family: ${(props) => props.ffamily};
  text-align: ${(props) => (props.talign ? '' : 'right')};
  border-right: ${(props) => (props.bright ? '1px solid' : 'none')};
  padding: 1em;
  display: grid;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    border: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
  justify-content: center;
  min-height: 100%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    text-align: center;
  }
`;

export default function AnimatedTitle() {
  const text =
    'Hi, Im a San Diego based web developer with a focus on front-end technologies. ';
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
          aria-label={text}
          role="heading"
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
          fweight="500"
          bbottom
          aitems="bottom"
          ffamily="'Archivo', sans-serif"
          mbottom="0"
          bright
        >
          I&apos;m a San Diego based
          <br /> web developer <br />
          with a focus on front-end technologies.
        </Title1>
        <Title1
          aria-label={text}
          role="heading"
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
          talign
          fweight="200"
          aitems="start"
          ffamily="'Roboto', sans-serif"
        >
          I love bringing good design to life with logic, creativity and code.
        </Title1>
      </Container>
      <PortfolioTicker />
    </>
  );
}
