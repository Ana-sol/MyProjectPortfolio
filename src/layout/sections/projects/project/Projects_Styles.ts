import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

const Info = styled.div`
    width: 100%;
    padding: 0 40px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${theme.media.tablet} {
        height: 524px;
    }

`

const Project = styled.div`
    display: flex;
    width: 100%;
    max-width: 992px;
    max-height: 524px;
    border-radius: 24px;
    box-shadow: 0 6px 64px rgba(112, 144, 176, 0.10);
    overflow: hidden;
    margin-bottom: 80px;
    
    &:last-of-type {
        margin-bottom: 0;
    }
    
    &:nth-child(even) {
        flex-direction: row-reverse;
        
        @media ${theme.media.tablet} {
            flex-direction: column-reverse;
        }
    }
    `


const Image = styled.img`
    height: 524px;
    object-fit: cover;

    @media ${theme.media.tablet} {

    }
`


const Title = styled.h3`
    color: ${theme.colors.primaryTitle};
    font-family: 'Playfair Display', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
    white-space: nowrap;
`

const Text = styled.p`
    color: ${theme.colors.secondaryText};
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    margin: 24px 0;
    
    
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
    Info
}