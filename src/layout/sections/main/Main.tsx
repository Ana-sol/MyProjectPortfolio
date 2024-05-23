import React from 'react';
import photo from '../../../assets/images/girl.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"flex-end"} justify={"space-around"} wrap={"wrap-reverse"}>
                    <S.TextBlock>
                        <S.MainTitle>Software Developer</S.MainTitle>
                        <S.Name>Hello, my name <br/> is Vahid Navazan</S.Name>
                        <S.SmallText>Short text with details about you, what you do or your professional career. You can add more information on the page.</S.SmallText>
                        <S.LinkProjects href="">Projects</S.LinkProjects>
                        <S.LinkLinkedin href="">LinkedIn</S.LinkLinkedin>
                    </S.TextBlock>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

