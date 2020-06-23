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
import { logos } from '../../assets/images/svg/svgIndex';

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
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.css}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.html}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.js}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.react}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.redux}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.express}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.node}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.npm}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.sass}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.git}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.mongo}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.webpack}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.styledComponents}
					</a>
				</LinksContainer>
			</ListContainer>
			<ListContainer>
				<H3Title>Co chcę się nauczyć</H3Title>
				<LinksContainer>
				<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.vue}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.gatsby}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.graphQl}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logos.next}
					</a>
					
				</LinksContainer>
				<p>Rozwijać to co już znam.</p>
			</ListContainer>
		</Container>
	</SkillsSectionStyled>
);

export default Skills;
