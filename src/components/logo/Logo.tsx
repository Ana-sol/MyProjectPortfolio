import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Logo: React.FC = () => {
    return (
        <Link href="">
            <Icon iconId={'log'}/>
        </Link>
    );
};


const Link = styled.a`
    font-family: Comfortaa, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.accent};
   height: 45px;

    &:hover {
        color: ${theme.colors.accent};
        cursor: pointer;
    }
`
