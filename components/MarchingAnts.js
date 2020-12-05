import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import styled from "styled-components";

const MarchingAntsWrapper = styled.article`
  @keyframes ants {
    to {
      background-position: 100% 100%;
    }
  }

  /* padding: 1em; */
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
        -45deg,
        black 0,
        black 25%,
        transparent 0,
        transparent 50%
      )
      0 / 0.6em 0.6em;
  animation: ants 90s linear infinite;
  /* font: 100%/1.6 Baskerville, Palatino, serif; */
`;

/**
 * `<MarchingAnts>` wraps an element with a cool border effect.
 */
export default function MarchingAnts({ children }) {
  return <MarchingAntsWrapper>{children}</MarchingAntsWrapper>;
}
