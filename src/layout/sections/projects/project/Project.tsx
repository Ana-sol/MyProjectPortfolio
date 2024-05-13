import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './Projects_Styles'


type ProjectPropsType = {
    title: string
    text: string
    src: string
    
}
export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <FlexWrapper justify={"space-around"} align={"center"}>
                    <div>
                        <S.Title>{props.title}</S.Title>
                        <S.Text>{props.text}</S.Text>
                        <S.Link href="">View Project</S.Link>
                    </div>
                        <S.Image src={props.src} alt=""/>
            </FlexWrapper>
        </S.Project>
    );
};




