import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { GlobalStyle } from './Global.style';
import Header from './containers/Header/Header';
import SectionMain from './containers/Main/Main';
import SectionProjects from './containers/Projects/Projects';
import SectionSkills from './containers/Skills/Skills';
import NavigationBar from './containers/Navigation/NavigationBar';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<NavigationBar />
			<Header />
			<main>
				<SectionMain />
				<SectionSkills />
				<SectionProjects />
			</main>
		</ThemeProvider>
	);
};

export default App;
