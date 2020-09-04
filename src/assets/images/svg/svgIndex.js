import React from 'react';

//Tech
import { ReactComponent as Css3Logo } from './teh_logos/css3-logo.svg';
import { ReactComponent as ExpressLogo } from './teh_logos/express-js-logo.svg';
import { ReactComponent as GitLogo } from './teh_logos/git-logo.svg';
import { ReactComponent as Html5Logo } from './teh_logos/html-5-logo.svg';
import { ReactComponent as JsLogo } from './teh_logos/javascript-logo.svg';
import { ReactComponent as MongodbLogo } from './teh_logos/mongodb-logo.svg';
import { ReactComponent as NodejsLogo } from './teh_logos/nodejs-logo.svg';
import { ReactComponent as NpmLogo } from './teh_logos/npm-logo.svg';
import { ReactComponent as ReactLogo } from './teh_logos/react-logo.svg';
import { ReactComponent as ReduxLogo } from './teh_logos/redux-logo.svg';
import { ReactComponent as SassLogo } from './teh_logos/sass-logo.svg';
import { ReactComponent as WebpackLogo } from './teh_logos/webpack-logo.svg';
import { ReactComponent as StyledComponentsLogo } from './teh_logos/styled-components-logo.svg';
import { ReactComponent as GatsbyLogo } from './teh_logos/gatsby-logo.svg';
import { ReactComponent as GraphQLLogo } from './teh_logos/graphQL-logo.svg';
import { ReactComponent as NextjsLogo } from './teh_logos/nextjs-logo.svg';
import { ReactComponent as VueLogo } from './teh_logos/vue-js-logo.svg';

//Platforms
import { ReactComponent as MailIcon } from './platforms/envelop.svg';
import { ReactComponent as FBIcon } from './platforms/facebook2.svg';
import { ReactComponent as GitHubIcon } from './platforms/github.svg';
import { ReactComponent as PortfolioIcon } from './platforms/profile.svg';

// Functionality
import { ReactComponent as ChevronLeftIcon } from './functionality/chevron-thin-left.svg';
import { ReactComponent as ChevronRightIcon } from './functionality/chevron-thin-right.svg';
import { ReactComponent as ChevronUpIcon } from './functionality/chevron-thin-up.svg';
import { ReactComponent as BubbleIcon } from './functionality/bubble.svg';
import { ReactComponent as LinkIcon } from './functionality/link.svg';

export const logosTeh = {
	css: <Css3Logo />,
	express: <ExpressLogo />,
	git: <GitLogo />,
	html: <Html5Logo />,
	js: <JsLogo />,
	mongo: <MongodbLogo />,
	node: <NodejsLogo />,
	npm: <NpmLogo />,
	react: <ReactLogo />,
	redux: <ReduxLogo />,
	sass: <SassLogo />,
	webpack: <WebpackLogo />,
	styledComponents: <StyledComponentsLogo />,
	gatsby: <GatsbyLogo />,

	graphQl: <GraphQLLogo />,
	next: <NextjsLogo />,
	vue: <VueLogo />
};

export const iconsFunc = {
	chevLeft: <ChevronLeftIcon />,
	chevRight: <ChevronRightIcon />,
	chefUp: <ChevronUpIcon />,
	bubbleIcon: <BubbleIcon />,
	linkIcon: <LinkIcon />
};

export const iconsPlatforms = {
    mail: <MailIcon />,
    fb: <FBIcon />,
	github: <GitHubIcon />,
	portfolio: <PortfolioIcon />
};
