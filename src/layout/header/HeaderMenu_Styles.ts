import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


//Menu

const MenuItem = styled.li`
`
const Link = styled.a`
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: #25282b;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;

    :hover {
        height: 100%;
        background-color: ${theme.colors.accent};
        transform: skewY(10deg);

    }
`
 // MobileMenu


const MobileMenu = styled.nav`
  
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

`

const BurgerButton = styled.button<{isOpen: boolean}>`
position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
      
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
                `}
        }
        
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
                `}
            
        }
     }
`
 //Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
export const S = {
    Link,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}