import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <StyledForm>
                    <Title>Name</Title>
                    <Field />
                    <Title>Email</Title>
                    <Field />
                    <Title>Message</Title>
                    <Field as={"textarea"}/>
                    <Button type={"submit"}>Send</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact= styled.section`
    align-items: center;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 10px auto;
    align-items: center;
    
    
    textarea {
        width: 400px;
        height: 160px;
        resize: none;

        @media ${theme.media.mobile} {
            width: 375px;
    }
     @media ${theme.media.mobile} {
         width: 375px;
         
     }
`
const Field = styled.input`
    position: static;
    width: 400px;
    height: 40px;
    align-items: center;
    margin-top: 10px;

    @media ${theme.media.mobile} {
        width: 375px;
        
    }
`
const Button = styled.a`
    width: 89px;
    height: 43px;
    border-radius: 8px;
    background: ${theme.colors.accent};
    padding: 8px 24px 8px 24px;
    margin-left: 320px;
    color: rgb(37, 40, 43);
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    text-align: left;
   
`

const Title = styled.h2`
    color: ${theme.colors.fontTitle};
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
  
`
