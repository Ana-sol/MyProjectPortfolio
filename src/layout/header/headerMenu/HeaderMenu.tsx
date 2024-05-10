import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index)=> {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`
const ListItem = styled.li`
    
`
const Link = styled.a`
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: #25282b;


    /* Автолейаут */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;

    :hover {
        height: 100%;
        background-color: ${theme.colors.accent};
        transform: skewY(10deg);

    }

`