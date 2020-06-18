import React from 'react';

import {H2TitleStyled} from './h2_v1.style'; 

const H2 = (props) => (
    <H2TitleStyled>
        {props.children}
    </H2TitleStyled>
);

export default H2;