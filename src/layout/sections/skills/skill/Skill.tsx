import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
    width: calc(100% / 6);
    min-width: 150px;
`