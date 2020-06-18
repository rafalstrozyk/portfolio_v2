import React from 'react';
import {BurgerStyle} from './Burger.style';


const Burger = (props) => {
    
    return (
        <BurgerStyle  open={props.open} onClick={() => props.setOpen(!props.open)}>
            <div></div>
            <div></div>
            <div></div>
        </BurgerStyle>
    )
}

export default Burger;