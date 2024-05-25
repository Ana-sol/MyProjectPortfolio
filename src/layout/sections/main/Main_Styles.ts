import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: auto;
    display: flex;
    padding: 110px 0 254px 0;
    overflow: hidden;
    

    @media ${theme.media.tablet} {
        padding-bottom: 90px;
    }
`
const TextBlock = styled.div`
    max-width: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
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
        top: 15px;
        left: -30px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 235px;
            height: 394px;
           
        }
    }
`

const Photo = styled.img`
    max-width: 460px;
    height: 600px;
    object-fit: cover;
    object-position: -200px 0;
    
    @media ${theme.media.mobile} {
        width: 235px;
        height: 394px;
    }
   
`

const MainTitle = styled.h1`
    color: ${theme.colors.accent};
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
  
`

const Name = styled.span`
    ${font({family: "'Roboto', sans-serif", Fmax: 64, Fmin: 42})}
    color: ${theme.colors.primaryTitle};
  
    
    @media ${theme.media.mobile} {
        margin: 12px 0;
    }
`

const SmallText = styled.p`
    padding: 32px 22px 32px 0;
    font-family: Nunito, sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
`


const ButtonBlock = styled.div`
    display: flex;
    gap: 12px;

`


export const S = {
    Main,
    TextBlock,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText,
    ButtonBlock

}