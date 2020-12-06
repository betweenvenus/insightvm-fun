import styled from "styled-components";

const InfoDetailsWrapper = styled.div`
  background-color: var(--dark);
  color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2em .5em;
  justify-content: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin: 0;
  }

  a {
    color: white;
  }
  code {
    display: block;
  }

  .subtitle {
    position: relative;
    top: 15px;
  }

  @media screen and (min-width: 768px) {
    padding: 4em 2em;
  }
`;

export default function InfoDetails({ children }) {
  return <InfoDetailsWrapper>{children}</InfoDetailsWrapper>;
}
