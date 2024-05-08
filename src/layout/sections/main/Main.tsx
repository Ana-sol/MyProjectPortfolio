import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/girl.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <MainTitle>Software Developer</MainTitle>
                        <Name>Hello, my name is Vahid Navazan</Name>
                        <SmallText>Short text with details about you, what you do or your professional career. You can add more information on the page.</SmallText>
                        <Link href="">Projects</Link>
                        <Link href="">LinkedIn</Link>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const PhotoWrapper = styled.div`
position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 450px;
        height: 590px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: 40px;
        left: 195px;
        z-index: -1;
    }

`
const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    background: rgb(249, 250, 255);
`

const Photo = styled.img`
    position: relative;
    width: 720px;
    height: 629px;
    object-fit: cover;
   
    
`


const MainTitle = styled.h1`
    color: rgb(253, 196, 53);
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
    text-transform: uppercase;
`

const Name = styled.h2`
    color: rgb(51, 51, 51);
    font-family: 'Roboto', sans-serif;
    font-size: 64px;
    font-weight: 700;
   margin: 10px 0;

`

const SmallText = styled.span`
    color: rgb(130, 130, 130);
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
`

const Link = styled.a`
    position: relative;
    width: 117px;
    height: 43px;
    border-radius: 8px;
    border: 2px solid rgb(37, 40, 43);
    background: rgb(253, 196, 53);
    padding: 8px 24px;
    display: inline-block;
    flex-direction: column;
    margin-right: 10px;
    margin-top: 20px;
    
`