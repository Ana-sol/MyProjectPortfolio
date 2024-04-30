import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
    );
};

const StyledFooter = styled.footer`
    background-color: #ffffff;
    min-height: 20vh;
`
const SocialList = styled.ul`
 list-style: none;
 display: flex;
    gap: 30px;
`

const SocialLink = styled.a`

`

const SocialItem = styled.li`

`

const Copyright = styled.small`


`
