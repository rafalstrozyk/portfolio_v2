import React from 'react';

import {
	SkillsSectionStyled,
	Container,
	Quotation,
	ListContainer,
	LinksContainer
} from './Skills.style';
import SecondTitle from '../../components/Headers/h2_v1/h2_v1';
import H3Title from '../../components/Headers/h3_v2/h3_v2';
import { logosTeh } from '../../assets/images/svg/svgIndex';

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
				<H3Title>Co już znam</H3Title>
				<LinksContainer>
					<a
						href='https://en.wikipedia.org/wiki/CSS'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.css}
					</a>
					<a
						href='https://en.wikipedia.org/wiki/HTML'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.html}
					</a>
					<a
						href='https://en.wikipedia.org/wiki/JavaScript'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.js}
					</a>
					<a
						href='https://reactjs.org/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.react}
					</a>
					<a
						href='https://redux.js.org/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.redux}
					</a>
					<a
						href='https://expressjs.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.express}
					</a>
					<a
						href='https://nodejs.org/en/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.node}
					</a>
					<a
						href='https://www.npmjs.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.npm}
					</a>
					<a
						href='https://sass-lang.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.sass}
					</a>
					<a
						href='https://git-scm.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.git}
					</a>
					<a
						href='https://www.mongodb.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.mongo}
					</a>
					<a
						href='https://webpack.js.org/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.webpack}
					</a>
					<a
						href='https://styled-components.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.styledComponents}
					</a>
				</LinksContainer>
			</ListContainer>
			<ListContainer>
				<H3Title>Czego chcę sie nauczyć</H3Title>
				<LinksContainer>
				<a
						href='https://vuejs.org/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.vue}
					</a>
					<a
						href='https://www.gatsbyjs.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.gatsby}
					</a>
					<a
						href='https://graphql.org/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.graphQl}
					</a>
					<a
						href='https://nextjs.org/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.next}
					</a>
					
				</LinksContainer>
				<p>Rozwijać to co już znam.</p>
			</ListContainer>
		</Container>
	</SkillsSectionStyled>
);

export default Skills;
