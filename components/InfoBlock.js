import styled from "styled-components";
import MarchingAnts from "./MarchingAnts.js";

const InfoBlockWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & > * {
    flex: 1 1 auto;
    min-width: auto;
  }

  @media screen and (min-width: 768px) {
    & > * {
      flex: 1 1 400px;
      min-width: 300px;
    }
  }
`;
export default function InfoBlock({ ...props }) {
  return (
    <MarchingAnts>
      <InfoBlockWrapper>{props.children}</InfoBlockWrapper>
    </MarchingAnts>
  );
}
