import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


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
            <Link href={"#"}>View Project</Link>
            <Image src={props.src} alt=""/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: rgba(241, 233, 74, 0.86);
    max-width: 992px;
    width: 100%;
`
const Image = styled.img`
    max-width: 496px;
    width: 100%;
    height: 524px;
    object-fit: cover;

`


const Title = styled.h3`


`

const Text = styled.p`


`

