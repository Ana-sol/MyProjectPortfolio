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
                <StyledMap>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.4134338712074!2d27.51315677658075!3d53.888855233993596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd003c7f63a09%3A0x186c5bd1315e662!2z0YPQuy4g0JvQtdGA0LzQvtC90YLQvtCy0LAgMTUsINCc0LjQvdGB0LosINCc0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMIDIyMDA4OQ!5e0!3m2!1sru!2sby!4v1715280309121!5m2!1sru!2sby"
                        loading="lazy" width="1200px" height="350px"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </StyledMap>

            </FlexWrapper>
        </StyledFooter>
    )
        ;
};

const StyledMap = styled.div`
    border-radius: 20px;
    margin-top: 40px;
`

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
    display: grid;
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
    position: static;
    width: 143px;
    height: 22px;
    color: ${theme.colors.primaryTitle};
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    margin-top: 20px;
`
