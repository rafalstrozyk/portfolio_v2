import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { GlobalStyle } from './Global.style';
import Header from './containers/Header/Header';
import SectionMain from './containers/Main/Main';
import SectionProjects from './containers/Projects/Projects';
import SectionSkills from './containers/Skills/Skills';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<SectionMain />
			<SectionProjects />
			<SectionSkills />
		</ThemeProvider>
	);
};

export default App;
