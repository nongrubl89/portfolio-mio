import styled, { keyframes } from 'styled-components';

const rollAnimation = keyframes`
  0%   { transform: scale(1)}
  25%  { transform: scale(0.8, 1) translate(40vw, 30vh) rotate(160deg);}
  45%  { transform: scale(0.8, 1) translate(60vw, 50vh) rotate(180deg);}
  65%  { transform: scale(0.8, 1) translate(90vw, 20vh) rotate(160deg);}
  85%  { transform: scale(1.3) translate(20vw, 10vh) rotate(-20deg); }
   `;

const rollAnimation2 = keyframes`
  0%   { transform: scale(1)}
  20%  { transform: scale(0.8, 1) translate(75vw, 40vh) rotate(160deg);}
  40%  { transform: scale(0.8, 1) translate(50vw, 60vh) rotate(180deg);}
  60%  { transform: scale(0.8, 1) translate(75vw, 50vh) rotate(160deg);}
  80%  { transform: scale(1.3) translate(70vw, 50vh) rotate(-20deg); }
   `;
const rollAnimation3 = keyframes`
0%   { transform: scale(1)}
20%  { transform: scale(0.8, 1) translate(10vw, 40vh) rotate(160deg);}
40%  { transform: scale(0.8, 1) translate(80vw, 50vh) rotate(180deg);}
60%  { transform: scale(0.8, 1) translate(40vw, 30vh) rotate(160deg);}
80%  { transform: scale(1.3) translate(45vw, 45vh) rotate(-40deg); }
 `;

const wiggle = keyframes`
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(5deg); }
   95% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const Logo1 = styled.div`
  display: inline-block;
  font-size: 22px;
  top: 0px;
  left: 20px;
  height: 120px;
  width: 120px;
  animation-name: ${rollAnimation};
  animation-duration: 25s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  position: absolute;
  z-index: -1200;
`;
const Logo2 = styled.div`
  display: inline-block;
  font-size: 22px;
  top: 0px;
  left: 20px;
  height: 120px;
  width: 120px;
  animation-name: ${rollAnimation2};
  animation-duration: 40s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  position: absolute;
  z-index: -1300;
`;

const Logo3 = styled.div`
  display: inline-block;
  font-size: 22px;
  top: 0px;
  left: 20px;
  height: 120px;
  width: 120px;
  animation-name: ${rollAnimation3};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
  position: absolute;
  z-index: -1300;
`;

const BlobStyle = styled.svg`
  position: relative;
  top: 0px;
  left: 0px;
`;

export default function Blob() {
  return (
    <>
      <Logo1>
        <BlobStyle viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffe570"
            d="M64,-16C72.5,5.5,61.8,37.9,40.5,52.6C19.2,67.4,-12.7,64.4,-36.8,47.6C-60.9,30.8,-77.3,0.2,-69.9,-19.7C-62.4,-39.7,-31.2,-48.9,-1.7,-48.3C27.7,-47.8,55.4,-37.4,64,-16Z"
            transform="translate(100 170)"
          />
        </BlobStyle>
      </Logo1>
      <Logo2>
        <BlobStyle viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="pink"
            d="M64,-16C72.5,5.5,61.8,37.9,40.5,52.6C19.2,67.4,-12.7,64.4,-36.8,47.6C-60.9,30.8,-77.3,0.2,-69.9,-19.7C-62.4,-39.7,-31.2,-48.9,-1.7,-48.3C27.7,-47.8,55.4,-37.4,64,-16Z"
            transform="translate(100 170)"
          />
        </BlobStyle>
      </Logo2>
      <Logo3>
        <BlobStyle viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#01592B"
            d="M64,-16C72.5,5.5,61.8,37.9,40.5,52.6C19.2,67.4,-12.7,64.4,-36.8,47.6C-60.9,30.8,-77.3,0.2,-69.9,-19.7C-62.4,-39.7,-31.2,-48.9,-1.7,-48.3C27.7,-47.8,55.4,-37.4,64,-16Z"
            transform="translate(100 170)"
          />
        </BlobStyle>
      </Logo3>
    </>
  );
}
