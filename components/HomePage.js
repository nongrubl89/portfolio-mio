import Blob from "./Blob";
import styled from "styled-components";

const Intro = styled.h2`
  font-weight: 200;
  width: 60%;
  margin-left: 20px;
  margin-top: 30px;
  @media (max-width: 600px) {
    width: 90%;
    margin-top: 70px;
  }
`;
export default function HomePage() {
  return (
    <div>
      <Blob />
      <Intro>
        Hi! I'm a San Diego based web developer with a focus on front-end
        technologies. I love bringing good design to life with logic, creativity
        and code.
      </Intro>
    </div>
  );
}
