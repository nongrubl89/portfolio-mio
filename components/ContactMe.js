import styled from 'styled-components';
import Link from 'next/link';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ContactDiv = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-auto-rows: 40px;

  h4 {
    font-family: 'Archivo', sans-serif;
    font-weight: 200;
    font-size: 1em;
    padding: 1em;
  }
  h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1em;
  }
`;

export default function ContactMe() {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
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
      y: `12em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  return (
    <ContactDiv
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={characterAnimation}
    >
      <h4>Get In Touch</h4>
      <h6>
        <Link href="https://www.linkedin.com/in/lisaburgnon/">LinkedIn</Link>
      </h6>
      <h6>
        <Link href="https://github.com/nongrubl89">GitHub</Link>
      </h6>
      <h6>
        <Link href="https://mail.google.com/mail/u/example@example.org/?view=cm&to=lisaburgnon@gmail.com">
          Email
        </Link>
      </h6>
    </ContactDiv>
  );
}
