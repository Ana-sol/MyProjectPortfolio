import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Header = styled.header`
    background: ${theme.colors.secondaryBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
`
export const S = {
    Header,
}