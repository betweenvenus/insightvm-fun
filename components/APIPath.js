import styled from "styled-components";

const APIPathWrapper = styled.span`
  display: block;
  margin-bottom: 1em;
`;

export default function APIPath({ path }) {
  return (
    <APIPathWrapper>
      <b>
        <pre>API Path: {path}</pre>
      </b>
    </APIPathWrapper>
  );
}
