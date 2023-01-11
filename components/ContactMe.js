import styled, { keyframes } from "styled-components";

const rotate = keyframes`    
  from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }`;
const Circle = styled.div`
  display: flex;
  svg {
    color: #4f6eb0;
    height: 50rem;
    width: 50rem;
    animation-name: ${rotate};
    animation-duration: 25s;
    animation-timing-function: linear;
  }
  @media (max-width: 600px) {
    height: 70em;
    width: 70em;
  } ;
`;

export default function ContactMe() {
  return (
    <Circle>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="330px"
        height="330px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <circle cx="100" cy="50" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text fill="#1f4797" style={{ fontWeight: "400" }}>
            <textPath xlinkHref="#circlePath">
              ---Get in touch!--Get in touch!--Get in touch!--Get in touch!--
            </textPath>
          </text>
        </g>
      </svg>
    </Circle>
  );
}
