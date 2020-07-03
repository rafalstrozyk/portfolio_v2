import React, { useState } from 'react';

import { SliderStyled } from './Slider.styled';
import SliderItemConteiner from './SliderItemConteiner';
import {iconsFunc} from '../../assets/images/svg/svgIndex';

import {test} from './SliderArray';

const Slider = () => {

	const [x, setX] = useState(0);
	const goLeft = () => {

        x === 0 ? setX(-100 * (test.length - 1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (test.length - 1) ? setX(0) : setX(x - 100);
	};

	return (
		<SliderStyled>
			{test.map((item, index) => {
				return (
					<SliderItemConteiner key={index}
						moved={x}
						img={item.img}
					>
						{item.content}
					</SliderItemConteiner>
				);
			})}
			<button id='goLeft' onClick={goLeft}>
				{iconsFunc.chevLeft}
			</button>
			<button id='goRight' onClick={goRight}>
				{iconsFunc.chevRight}
			</button>
		</SliderStyled>
	);
};

export default Slider;
