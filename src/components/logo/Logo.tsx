import React from 'react';
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
            <span>Vahid Navazan</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 180%;
    color: #25282b;
    font-family: 'Comfortaa', sans-serif;
    text-shadow: 4px 5px 5px 4px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 10px 0px gray;
   
`