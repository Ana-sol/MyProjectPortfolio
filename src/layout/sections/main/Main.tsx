import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/girl.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <TextBlock>
                        <MainTitle>Software Developer</MainTitle>
                        <Name>Hello, my name is Vahid Navazan</Name>
                        <SmallText>Short text with details about you, what you do or your professional career. You can add more information on the page.</SmallText>
                        <LinkProjects href="">Projects</LinkProjects>
                        <LinkLinkedin href="">LinkedIn</LinkLinkedin>
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

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
const StyledMain = styled.section`
    min-height: 100vh;
    background: ${theme.colors.primaryBg};
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