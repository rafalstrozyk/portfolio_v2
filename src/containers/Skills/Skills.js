import React from 'react';

import {
	SkillsSectionStyled,
	Container,
	Quotation,
	ListContainer
} from './Skills.style';
import SecondTitle from '../../components/Headers/h2_v1/h2_v1';
import H3Title from '../../components/Headers/h3_v2/h3_v2';
import {logos} from '../../assets/images/svg/svgIndex';

const Skills = () => (
	<SkillsSectionStyled id='sectionSkills'>
		<SecondTitle>Umiejętności</SecondTitle>

		<Quotation>
			<span>&#147;</span>Podstawą jest porządek w kodzie i w plikach. Zawsze
			staram się o najlepsze rozwiazanie dla danego wdrożenia, które zapewni
			najlepszą wydajność<span>&#132;</span>
		</Quotation>
		<Container>
			<ListContainer>
				<H3Title>Co już znam?</H3Title>
				<ul>
                    {logos.css}
                    {logos.express}
                    {logos.git}
                    {logos.html}
                    {logos.js}
                    {logos.mongo}
                    {logos.node}
                    {logos.npm}
                    {logos.react}
                    {logos.redux}
                    {logos.sass}
                    {logos.webpack}
				</ul>
                <div style={{fontSize:'12px',color:'red'}}>Test</div>
			</ListContainer>
			{/* <ListContainer>
				<H3Title>Co chcę się nauczyć?</H3Title>
				<ul>
					<li>Vue</li>
					<li>GraphQL</li>
					<li>Gatsby.js</li>
					<li>Gulp</li>
					<li>Rozwijanie tego co umiem</li>
				</ul>
			</ListContainer> */}
		</Container>
	</SkillsSectionStyled>
);

export default Skills;
