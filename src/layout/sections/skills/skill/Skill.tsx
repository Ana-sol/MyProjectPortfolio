import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 13%;
    background-color: rgba(240, 248, 255, 0.12);
    margin: 10px;
`