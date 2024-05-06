import React from 'react';
import styled from "styled-components";


type ProjectPropsType = {
    title: string
    text: string
    src: string
    
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Button>View Project</Button>
            <Image src={props.src} alt=""/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 992px;
    width: 100%;
`
const Image = styled.img`
    max-width: 496px;
    width: 100%;
    height: 524px;
    object-fit: cover;
    position: relative;
    left: 400px;

`


const Title = styled.h3`


`

const Text = styled.p`
display: block;
    
`
const Button = styled.a`
`

