import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
   width: 15%;
    order: 1;
    flex-grow: 0;
    margin: 74px 0px;
   
`