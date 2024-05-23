import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color: ${theme.colors.primaryTitle};
    text-align: center;
    font-family: 'Playfair Display', sans-serif;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 85px;
    
    position: relative;
    
    
    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`