import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import projOne from './../../../assets/images/yoga.webp'
import projTwo from './../../../assets/images/calender.webp'
import projThree from './../../../assets/images/phone.webp'
import { Container } from '../../../components/Container';
import styled from "styled-components";

const projectsData = [
    {
        projectName: 'Project name',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        image: projOne
    },
    {
        projectName: 'Project name',
        description: 'What was your role, your deliverables, if the project was personal, freelancing.',
        image: projTwo
    },
    {
        projectName: 'Project name',
        description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.',
        image: projThree
    },
]

export const Projects: React.FC = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'} >

                    {projectsData.map((p, index) => {
                        return <Project projectName={p.projectName}
                                        description={p.description}
                                        image={p.image}
                                        key={index}/>
                    })}

                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    position: relative;
    z-index: 1;
`
