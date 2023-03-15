import { useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioTicker from './PortfolioTicker';
import Portfolio from './Portfolio';

const Title1 = styled(motion.div)`
  padding: 1em;
  height: max-content;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  align-items: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    border: none;
    font-size: 3rem;
    height: 85%;
    gap: 0px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 550px);
  }
`;

const TitleText = styled.h2`
  font-weight: 200;
  font-size: 1.5em;
  font-family: ${(props) => props.ff};
  text-align: ${(props) => props.textplacement};
  border-right: ${(props) => (props.borderstyle ? 'none' : '1px solid black')};
  padding-right: ${(props) => (props.rightpadding ? 'none' : '.75em')};
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    border-right: none;
    text-align: right;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    font-size: 2.5em;
  }
`;

const Container = styled.div`
  justify-content: center;
  min-height: 100vh;
  display: grid;
  align-content: center;
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
      y: `.5em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 3,
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
        >
          <TitleText ff="'Archivo', sans-serif" textplacement="right">
            I&apos;m a San Diego based web developer with a focus on front-end
            technologies.
          </TitleText>
          <TitleText
            paddingright
            ff="'Roboto', sans-serif"
            textplacement="left"
            borderstyle
          >
            I love bringing good design to life with logic, creativity and{' '}
            <br />
            code.
          </TitleText>
        </Title1>
      </Container>
      <PortfolioTicker />
      <Portfolio />
    </>
  );
}
