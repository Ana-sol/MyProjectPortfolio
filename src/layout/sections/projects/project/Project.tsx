import React, {ReactNode} from 'react';
import {S} from './Projects_Styles';
import {Button} from "../../../../components/menu/Button";


type ProjectPropsType = {
    projectName: string
    description: string
    image: string
    
}



export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Info>
                <S.Title>{props.projectName}</S.Title>
                <S.Text>{props.description}</S.Text>
                <Button as={'a'} href={'#'} btnType={'projects'}>View Project</Button>
            </S.Info>
            <S.Image src={props.image} alt=""/>
        </S.Project>
    );
};




