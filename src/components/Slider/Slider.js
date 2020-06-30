import React, { useState } from 'react';

import { SliderStyled } from './Slider.styled';

const Slider = () => {
	let sliderArray = [1, 2, 3, 4, 5];
	const [x, setX] = useState(0);
	const goLeft = () => {

        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
	};

	return (
		<SliderStyled>
			{sliderArray.map((item, index) => {
				return (
					<div
						key={index}
						className='slide'
						style={{ transform: `translateX(${x}%)` }}
					>
						{item}
					</div>
				);
			})}
			<button id='goLeft' onClick={goLeft}>
				Left
			</button>
			<button id='goRight' onClick={goRight}>
				Right
			</button>
		</SliderStyled>
	);
};

export default Slider;
