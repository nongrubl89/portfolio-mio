import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const projects = [
  {
    name: 'Trip Report',
    Tecnologies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    SourceCode: 'github.com',
    LiveProject: 'github.com',
  },
  {
    name: 'Trip Report',
    Tecnologies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    SourceCode: 'github.com',
    LiveProject: 'github.com',
  },
  {
    name: 'Trip Report',
    Tecnologies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    SourceCode: 'github.com',
    LiveProject: 'github.com',
  },
];

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  text-align: left;
  padding: 2em;
  margin: 10em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: 3em;
  }
`;

const PortfolioTitle = styled.h6`
  font-family: 'Archivo', sans-serif;
  font-weight: 200;
  margin-top: 0;
  opacity: 50%;
`;

const PortfolioBlurb = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.weightfont};
  font-size: ${(props) => props.sizefont};
  margin-top: 0;
`;

// const Line = styled.hr`
//   grid-column: 1/3;
//   color: black;
// `;

// const MyButton = styled.button`
//   background-color: black;
//   color: white;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 400;
//   border: none;
//   border-radius: 2px;
//   padding: 1em;
// `;

const ButtonDiv = styled.div`
  gap: 1em;
  width: 300px;
  display: grid;
  justify-items: stretch;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
`;

const LinkDiv = styled.div`
  display: inline-flex;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  font-size: medium;
  gap: 0.25em;
`;

export default function Portfolio() {
  return (
    <PortfolioContainer>
      {projects.map((project) => (
        <>
          <hr
            style={{
              border: '0',
              width: '100%',
              backgroundColor: 'black',
              height: '1px',
              gridColumn: '1/3',
            }}
          />
          <PortfolioTitle>Title</PortfolioTitle>
          <PortfolioBlurb weightfont="400" sizefont="large">
            {project.name}
            <FontAwesomeIcon icon="faRegular faCircle" />
          </PortfolioBlurb>
          <PortfolioTitle>Technologies Used</PortfolioTitle>
          <PortfolioBlurb weightfont="300" sizefont="medium">
            {project.Tecnologies}
          </PortfolioBlurb>
          <PortfolioTitle>Description</PortfolioTitle>
          <PortfolioBlurb weightfont="200" sizefont="small">
            {project.Description}
          </PortfolioBlurb>
          <PortfolioTitle>See It Live</PortfolioTitle>
          <ButtonDiv>
            <LinkDiv>
              {' '}
              <FontAwesomeIcon icon={faArrowRight} />
              <Link href="#">Live Project</Link>
            </LinkDiv>
            <LinkDiv>
              {' '}
              <FontAwesomeIcon icon={faArrowRight} />
              <Link href="#">Source Code</Link>
            </LinkDiv>
            {/* <MyButton type="button">Source Code</MyButton>
            <MyButton type="button">Live Project</MyButton> */}
          </ButtonDiv>
          {/* <Line /> */}
        </>
      ))}
    </PortfolioContainer>
  );
}
