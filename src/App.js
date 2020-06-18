import React, {useState, useRef} from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { GlobalStyle } from './Global.style';
import Header from './containers/Header/Header';
import SectionMain from './containers/Main/Main';
import SectionProjects from './containers/Projects/Projects';
import SectionSkills from './containers/Skills/Skills';
import NavigationBar from './containers/Navigation/NavigationBar';
import Burger from './components/Navigation/Burger/Burger';
import { useOnClickOutside } from './hooks/clickOutside';

const App = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div ref={node}>
				<Burger open={open} setOpen={setOpen}/>
				<NavigationBar open={open} setOpen={setOpen}/>
			</div>
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
