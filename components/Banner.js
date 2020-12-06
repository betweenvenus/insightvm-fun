import styled from "styled-components";
import currentTime from "../currentTime.js";
import ASCIIArt from "./ASCIIArt.js";

const Monospace = styled.span`
  color: blue;
  font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
  font-size: .75rem;
  white-space: wrap;
`;

const Paragraph = styled.p`
  font-weight: normal;
  margin: 1em 0;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Banner = () => {
  return (
    <header>
      <h1>
        <ASCIIArt />
      </h1>
      <Paragraph>
        Exploring the <a href="https://www.rapid7.com/products/insightvm/">InsightVM</a> API by exposing potentially dangerous
        information about my PC on the Internet for no reason.
      </Paragraph>
      <Monospace>
        <b>🌐 Last updated: {currentTime}</b>
      </Monospace>
    </header>
  );
};

export default Banner;
