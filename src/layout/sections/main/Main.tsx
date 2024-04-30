import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/girl.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";
export const Main = () => {
    return (
        <div>
            <FlexWrapper>
                <div>
                    <MainTitle>Software Developer</MainTitle>
                    <Name>Hello, my name is Vahid Navazan</Name>
                    <span>Short text with details about you, what you do or your professional career. You can add more information on the about page.</span>
                    <Link>Projects</Link>
                    <Link>LinkedIn</Link>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`

