import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 100vh;
    background: ${theme.colors.primaryBg};
`
const TextBlock = styled.div`
    max-width: 420px;
    width: 100%;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    flex-wrap: wrap;
    
    &::before {
        content: "";
        width: 450px;
        height: 590px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: 40px;
        left: 195px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 250px;
            height: 350px;
           
        }
    }
`

const Photo = styled.img`
    width: 700px;
    height: 629px;
    object-fit: cover;
    
    @media ${theme.media.mobile} {
        width: 450px;
        height: 394px;
    }
   
`

const MainTitle = styled.h1`
    color: ${theme.colors.accent};
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
`

const Name = styled.h2`
    ${font({family: "'Roboto', sans-serif", Fmax: 64, Fmin: 42})}
    color: ${theme.colors.fontMain};
  
    
    @media ${theme.media.mobile} {
        margin: 12px 0;
    }
`

const SmallText = styled.span`
    color: ${theme.colors.fontText};
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
`

const LinkProjects = styled.a`
    position: relative;
    width: 115px;
    height: 43px;
    display:inline-block;
    margin-right: 15px;
    margin-top: 20px;
    padding: 8px 24px 8px 24px;
    border-radius: 8px;
    background: ${theme.colors.accent};
  
`
const LinkLinkedin = styled.a`
    position: absolute;
    width: 117px;
    height: 43px;
    padding: 8px 24px 8px 24px;
    box-sizing: border-box;
    border: 2px solid ${theme.colors.fontTitle};
    border-radius: 8px;
    margin-top: 20px;
`

export const S = {
    Main,
    TextBlock,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText,
    LinkProjects,
    LinkLinkedin

}