import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";



export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"38"} height={"39"} viewBox={"0 0 38px 39px"} iconId={"inst"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"38"} height={"39"} viewBox={"0 0 38px 39px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"42"} height={"33"} viewBox={"0 0 42px 33px"} iconId={"email"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Madelyn Torff 2021</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
        ;
};


const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    justify-content: center;
    display: flex;
   
`
const SocialList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

const SocialLink = styled.a`

`

const SocialItem = styled.li`
   
`

const Copyright = styled.small`
    width: 143px;
    height: 22px;
    color: ${theme.colors.primaryTitle};
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    margin-top: 20px;
  
`
