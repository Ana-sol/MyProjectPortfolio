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
    max-width: 100%;
    width: 15%;
    flex-grow: 1;
  padding: 50px 70px;
   
   
`