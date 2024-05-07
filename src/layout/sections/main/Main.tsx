import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/girl.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import image from '../../../assets/images/yellow-bg-_1_.webp'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <MainTitle>Software Developer</MainTitle>
                        <Name>Hello, my name is Vahid Navazan</Name>
                        <SmallText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</SmallText>
                        <ButtonFirst>Projects</ButtonFirst>
                        <ButtonSecond>LinkedIn</ButtonSecond>
                    </div>
                    <Photo src={photo} alt=""/>
                    <Image src={image} alt=""/>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};


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
   z-index: 99999;
    
`
const Image = styled.img`

    /* Vector */
    position: absolute;
    width: 777px;
    height: 877px;
    left: 47%;
    right: -57px;
    top: -248px;
    bottom: 0;
    background: rgb(255, 198, 55);
   
    
    
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
    line-height: 120%;
    text-align: left;

`

const SmallText = styled.span`
    color: rgb(130, 130, 130);
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
`

const ButtonFirst = styled.a`
    /* button / primary */
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
`

const ButtonSecond = styled.a`
    /* button / secondary */
    position: absolute;
    width: 117px;
    height: 43px;
    box-sizing: border-box;
    border: 2px solid rgb(37, 40, 43);
    border-radius: 8px;
    padding: 8px 24px;
   
    
    
`

