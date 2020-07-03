import React from 'react';

import {SliderItemStyled, SliderItemHeader, SliderItemContent, SliderItemLinks} from './SliderItem.styled';

const SliderItem = (props) => (
    <SliderItemStyled>
        <SliderItemHeader>{props.header}</SliderItemHeader>
        <SliderItemContent>{props.content}</SliderItemContent>
        <SliderItemLinks>{props.links}</SliderItemLinks>
    </SliderItemStyled>
);

export default SliderItem;