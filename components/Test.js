import styled from 'styled-components';

const Heading = styled.h1`
    color: red;
    background-color: yellow;
    font-size: 3rem;
`;

export default function Test({ data }) {
    const { hostName, ip, riskScore, vulnerabilities} = data;
    return (
        <Heading><strong>{ hostName }</strong>This is a test too</Heading>
    )
}