import React from 'react';

import SliderItem from './SliderItem';
import img1 from '../../assets/images/projectsImages/portfolio_projects.png';
import img2 from '../../assets/images/projectsImages/wetherApp.png';
import img3 from '../../assets/images/projectsImages/socialjellyfish.png';
import {iconsPlatforms, iconsFunc} from '../../assets/images/svg/svgIndex';

export const projectList = [
	{
		content: (
			<SliderItem header='Portfolio' content='To właśnie ta strona, stworzona przeze mnie z pasją. i starannością w React' links={
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/rafalstrozyk/portfolio_v2">{iconsPlatforms.github}</a>
			} /> 
		),
		img: img1,
	},
	{
		content: (
			<SliderItem header='Aplikacja pogodowa' content='Aplikacja pogodowa stworzona przy pomocy js i css' links={
				<div>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/rafalstrozyk/weather-app">{iconsPlatforms.github}</a>
					<a target="_blank" rel="noopener noreferrer" href="https://rafalstrozyk.github.io/pages/weatcher_app/index.html">{iconsFunc.linkIcon}</a>
				 </div>
			
			} />
		),
		img: img2
	},
	{
		content: (
			<SliderItem header='SocialJellyFish' content='Aplikacja społecznościowa zrobiona przy pomocy poradnika na yt w React' links={
				<div>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/rafalstrozyk/clientSocialJellyfishApp">{iconsPlatforms.github}</a>
				<a target="_blank" rel="noopener noreferrer" href="https://socialjellyfishapp.web.app/">{iconsFunc.linkIcon}</a>
			 </div>
			} /> 
		),
		img: img3
	},
	{
		content: (
			<SliderItem header='Lista pozostałych projektów' content='Jest to strona z listą moich innych projektów, zapraszam do zapoznania się z nimi :)' links={
			<a target="_blank" rel="noopener noreferrer" href="https://rafalstrozyk.github.io/">{iconsFunc.linkIcon}</a>
			} /> 
		),
		img: ''
	}
];
