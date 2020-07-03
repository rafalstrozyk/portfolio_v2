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
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.css}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.html}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.js}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.react}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.redux}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.express}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.node}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.npm}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.sass}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.git}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.mongo}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.webpack}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.styledComponents}
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
						{logosTeh.vue}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.gatsby}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
						rel='noopener noreferrer'
						target='_blank'
					>
						{logosTeh.graphQl}
					</a>
					<a
						href='http://how2html.pl/a-target-link-html/'
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
