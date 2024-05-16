import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                <S.Form>
                    <S.Title>Name</S.Title>
                    <S.Field />
                    <S.Title>Email</S.Title>
                    <S.Field />
                    <S.Title>Message</S.Title>
                    <S.Field as={"textarea"}/>
                    <S.Button type={"submit"}>Send</S.Button>
                </S.Form>
                    </FlexWrapper>
            </Container>
        </S.Contact>
    );
};


