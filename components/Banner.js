import styled from 'styled-components';

const Preformatted = styled.pre`
    font-size: 1.65vw;
    line-height: 1;
    color: blue;
    @media screen and (min-width: 768px) {
        font-size: 1.25vw;
    }
`;

const Paragraph = styled.p`
    font-weight: normal;
    margin: 1em 0;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`;
const Banner = () => {
    return(
        <header>
            <Preformatted>{`
██████╗ ██╗     ███████╗ █████╗ ███████╗███████╗    ██████╗  ██████╗ ███╗   ██╗████████╗    
██╔══██╗██║     ██╔════╝██╔══██╗██╔════╝██╔════╝    ██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝    
██████╔╝██║     █████╗  ███████║███████╗█████╗      ██║  ██║██║   ██║██╔██╗ ██║   ██║       
██╔═══╝ ██║     ██╔══╝  ██╔══██║╚════██║██╔══╝      ██║  ██║██║   ██║██║╚██╗██║   ██║       
██║     ███████╗███████╗██║  ██║███████║███████╗    ██████╔╝╚██████╔╝██║ ╚████║   ██║       
╚═╝     ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝       
                                                                                            
██╗  ██╗ █████╗  ██████╗██╗  ██╗    ███╗   ███╗███████╗██╗                                  
██║  ██║██╔══██╗██╔════╝██║ ██╔╝    ████╗ ████║██╔════╝██║                                  
███████║███████║██║     █████╔╝     ██╔████╔██║█████╗  ██║                                  
██╔══██║██╔══██║██║     ██╔═██╗     ██║╚██╔╝██║██╔══╝  ╚═╝                                  
██║  ██║██║  ██║╚██████╗██║  ██╗    ██║ ╚═╝ ██║███████╗██╗                                  
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝╚═╝                                  
            `}
            </Preformatted>
            <Paragraph>
                Exploring the InsightVM API by exposing potentially dangerous information about my PC on the Internet for no reason.
            </Paragraph>
        </header>
    )
}

export default Banner;