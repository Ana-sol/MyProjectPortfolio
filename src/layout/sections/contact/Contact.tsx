import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
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
        </StyledContact>
    );
};

const StyledContact= styled.section`
    min-height: 50vh;
    background-color: rgba(204, 199, 56, 0.86);
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    
`
const Field = styled.input`

`

const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    color: #25282b;
`
