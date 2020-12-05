import styled from 'styled-components';

const InfoDetailsWrapper = styled.div`
    background-color: var(--dark);
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 4em 0;
    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        margin: 0;
    }
`;

export default function InfoDetails({ children }) {
    return  <InfoDetailsWrapper>{children}</InfoDetailsWrapper>
}