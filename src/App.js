import React from 'react';
import { GlobalStyle } from './Global.style';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<div>
				<h1>Test</h1>
			</div>
		</ThemeProvider>
	);
};

export default App;
