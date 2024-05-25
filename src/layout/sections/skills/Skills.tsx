import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";


const skillData = [
    {
        iconId: "vscode"
    },
    {
        iconId: "js"
    },
    {
        iconId: "css"
    },
    {
        iconId: "html"
    },
    {
        iconId: "man"
    },
    {
        iconId: "vector"
    },
    {
        iconId: "cat"
    },
    {
        iconId: "git"
    },
    {
        iconId: "react"
    },
    {
        iconId: "sass"
    },
    {
        iconId: "bootstrap"
    },
    {
        iconId: "tailwind"
    },

]
export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index)=> {
                        return <Skill iconId={s.iconId} key={index}/>
                    })}
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    gap: 20px;
`