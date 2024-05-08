import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type ProjectPropsType = {
    title: string
    text: string
    src: string
    
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper justify={"space-between"} align={"center"}>
                    <div>
                        <Title>{props.title}</Title>
                        <Text>{props.text}</Text>
                        <Link href="">View Project</Link>
                    </div>
                        <Image src={props.src} alt=""/>
                </FlexWrapper>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 992px;
    width: 100%;
    margin-top: 80px;
  
`
const Image = styled.img`
    width: 496px;
    height: 526px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`


const Title = styled.h3`
    color: rgb(37, 40, 43);
    font-family: 'Playfair Display';
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
 

`

const Text = styled.p`
    color: rgb(130, 130, 130);
    font-family: 'Nunito';
    font-size: 18px;
    font-weight: 400;
    position: static;
    width: 406.68px;
    height: 81px;
    
`
const Link = styled.a`
    box-sizing: border-box;
    border: 1px solid rgb(37, 40, 43);
    border-radius: 24px;
    width: 150px;
    height: 43px;
    padding: 8px 24px 8px 24px;
    color: rgb(37, 40, 43);
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    
   
`


