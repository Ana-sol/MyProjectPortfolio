import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <StyledLogo>
            <span>Vahid Navazan</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.span`
    font-weight: 700;
    font-size: 26px;
    color: ${theme.colors.primaryTitle};
    font-family: 'Comfortaa', sans-serif;
   
`