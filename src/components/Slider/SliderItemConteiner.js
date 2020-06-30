import React from 'react';

import {ItemStyledConteiner} from './SliderItemConteiner.styled';

const SliderItem = (props) => (
    <ItemStyledConteiner moved={props.moved} img={props.img}>
        {props.children}
    </ItemStyledConteiner>
);

export default SliderItem;