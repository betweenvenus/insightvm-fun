import styled from 'styled-components';

const StyledPreformatted = styled.pre`
    
`;

export default function APIPath({ path }) {
    return <b><pre>API Path: { path }</pre></b>
}