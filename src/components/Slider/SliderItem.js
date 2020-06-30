import React from 'react';

import {SliderItemStyled} from './SliderItem.styled';

const SliderItem = (props) => (
    <SliderItemStyled>
        {props.children}
    </SliderItemStyled>
);

export default SliderItem;