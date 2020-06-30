import React from 'react';

import { ProjectsSectionStyled } from './Projects.style';

import SectionTitle from '../../components/Headers/h2_v1/h2_v1';

import image1 from '../../assets/images/backgroundHeader.jpg';
import Slider from '../../components/Slider/Slider';

const Projects = () => (
	<ProjectsSectionStyled id='sectionProjects'>
		<SectionTitle>Projekty</SectionTitle>
        <Slider />
	</ProjectsSectionStyled>
);

export default Projects;
