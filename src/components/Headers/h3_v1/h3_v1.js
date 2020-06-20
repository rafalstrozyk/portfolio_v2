import React from 'react';

import {H3TitleStyled} from './h3_v1.style'; 

const H3 = (props) => (
    <H3TitleStyled>
        {props.children}
    </H3TitleStyled>
);

export default H3;