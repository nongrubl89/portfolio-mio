import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const projects = [
  {
    name: 'Trip Report',
    Tecnologies: 'Next.js, React Styled Components, Apollo GraphQL, Strapi CMS',
    Description:
      'I built Trip Report to solve an issue I come across constantly in my work as a corporate flight attendant: sharing passenger feedback and preferences with my teammates. Users can update the owner of an aircrafts preferences and standard stock requests. They can also create new trips on a specific aircraft, add catering requests to the trip, and then review and provide feedback once the trip is complete. Trip Report is a work in progress. I am currently adding individual passenger profiles, crew profiles, and important aircraft document upload.',
    SourceCode: 'https://github.com/nongrubl89/Trip-Report',
    LiveProject: 'https://trip-report-alpha.vercel.app/',
  },
  {
    name: 'Tennis Memory Game',
    Tecnologies:
      'React.js , Node.js, Express.js, Multer Image Processing/Upload, MongoDB, Styled Components',
    Description:
      'A quick game of tennis themed memory built with React on the front-end and Express.js and MongoDB on the back-end. I used Styled Components and CSS Grid for the layout and love the result. ',
    SourceCode: 'https://github.com/nongrubl89/Tennis-Memory-Game',
    LiveProject: 'https://ecstatic-lichterman-006afa.netlify.app/',
  },
  {
    name: 'Book Tracker',
    Tecnologies: 'Vanilla Javascript, HTML, CSS',
    Description:
      'This is an older project built with the New York Times books API. Users can track and rate books that theyve read and discover other books by their favorite authors thanks to the New York Times books API!',
    SourceCode: 'github.com',
    LiveProject: 'github.com',
  },
];

const Frame = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  justify-items: center;
  /* height: 100vh; */
  height: max-content;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column: 2/3;
  grid-column-gap: 1.5em;
  /* height: 100vh; */
  text-align: left;
  padding: 2em;
  width: 65%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    padding: 1em;
  }
`;

const PortfolioTitle = styled.h6`
  font-family: 'Archivo', sans-serif;
  font-weight: 200;
  margin-top: 0;
  opacity: 50%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 1.5em;
  }
`;

const PortfolioBlurb = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.weightfont};
  font-size: ${(props) => props.sizefont};
  margin-top: 0;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 1.5em;
  }
`;

const ButtonDiv = styled.div`
  gap: 1em;
  width: max-content;
  display: grid;
  justify-items: stretch;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
`;

const LinkDiv = styled.div`
  display: inline-flex;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  font-size: small;
  gap: 0.25em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 1.5em;
  }
`;

export default function Portfolio() {
  return (
    <Frame>
      <PortfolioContainer>
        {projects.map((project, i) => (
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
            </PortfolioBlurb>
            <PortfolioTitle>Technologies Used</PortfolioTitle>
            <PortfolioBlurb weightfont="300" sizefont="small">
              {project.Tecnologies}
            </PortfolioBlurb>
            <PortfolioTitle>Description</PortfolioTitle>
            <PortfolioBlurb weightfont="300" sizefont="medium">
              {project.Description}
            </PortfolioBlurb>
            <PortfolioTitle>See It Live</PortfolioTitle>
            <ButtonDiv>
              <LinkDiv>
                {' '}
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={project.LiveProject}>Live Project</Link>
              </LinkDiv>
              <LinkDiv>
                {' '}
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={project.SourceCode}>Source Code</Link>
              </LinkDiv>
              {/* <MyButton type="button">Source Code</MyButton>
            <MyButton type="button">Live Project</MyButton> */}
            </ButtonDiv>
            {/* <Line /> */}
          </>
        ))}
      </PortfolioContainer>
    </Frame>
  );
}
