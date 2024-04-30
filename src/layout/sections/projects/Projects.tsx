import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import projOne from './../../../assets/images/yoga.webp'
import projTwo from './../../../assets/images/calender.webp'
import projThree from './../../../assets/images/phone.webp'


export const Projects = () => {
    return (
        <StyledProjects>
           <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <Project title={"Project Name"}
                         src={projOne}
                         text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}/>
                <Project title={"Project Name"}
                         src={projTwo}
                         text={"What was your role, your deliverables, if the project was personal, freelancing."}/>
                <Project title={"Project Name"}
                         src={projThree}
                         text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #6d73a1;
`