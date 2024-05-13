import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";


const Project = styled.div`
    margin-top: 80px;
    border: 5px solid ${theme.colors.accent};
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
    flex: none;
    order: 0;
    flex-grow: 0;
  
    @media ${theme.media.desktop} {
        max-width: 998px;
    }
`
const Image = styled.img`
    width: 496px;
    height: 526px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`


const Title = styled.h3`
    color: ${theme.colors.fontTitle};
    font-family: 'Playfair Display', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
    margin-left: 20px;
 

`

const Text = styled.p`
    color: ${theme.colors.fontText};
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 400;
    width: 406.68px;
    height: 81px;
    margin-left: 20px;
    margin-top: 15px;
    
    
`
const Link = styled.a`
    box-sizing: border-box;
    border: 1px solid rgb(37, 40, 43);
    border-radius: 24px;
    width: 150px;
    height: 43px;
    padding: 8px 24px 8px 24px;
    color: rgb(37, 40, 43);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
`

const Projects = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`
export const S = {
    Projects,
    Project,
    Image,
    Title,
    Text,
    Link
}