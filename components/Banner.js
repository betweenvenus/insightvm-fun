import styled from "styled-components";
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

const Banner = ({ timestamp }) => {
  return (
    <header>
      <h1>
        <ASCIIArt />
      </h1>
      <Paragraph>
        Exploring the <a href="https://www.rapid7.com/products/insightvm/" target="_blank">InsightVM</a> API by exposing potentially dangerous
        information about my PC on the Internet for no reason.
      </Paragraph>
      <Monospace>
        <b>🌐 Last updated: {timestamp}</b>
      </Monospace>
    </header>
  );
};

export default Banner;
