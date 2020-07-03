import React from 'react';

import SliderItem from './SliderItem';
import img1 from '../../assets/images/portfolio_projects.png';
import {iconsPlatforms} from '../../assets/images/svg/svgIndex';

export const test = [
	{
		content: (
			<SliderItem header='Strona Portfolio' content='Strona mojego portfolio którą sam
			zaprojektowałem. Stworzona przy pomocy react, react-scroll i styled-components.' links={
			<a href="/">{iconsPlatforms.github}</a>
			} /> 
		),
		img: img1
	},
	{
		content: (
			<SliderItem header='Header' content='Opis' links={
			<a href="/">{iconsPlatforms.github}</a>
			} />
		),
		img: img1
	},
	{
		content: (
			<SliderItem header='Header' content='Opis' links={
			<a href="/">{iconsPlatforms.github}</a>
			} /> 
		),
		img: img1
	},
	{
		content: (
			<SliderItem header='Header' content='Opis' links={
			<a href="/">{iconsPlatforms.github}</a>
			} /> 
		),
		img: img1
	},
	{
		content: (
			<SliderItem header='Header' content='Opis' links={
			<a href="/">{iconsPlatforms.github}</a>
			} /> 
		),
		img: img1
	}
];
