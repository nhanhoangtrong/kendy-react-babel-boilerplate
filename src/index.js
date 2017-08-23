import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { store, syncHistory } from './store';

// ==== Needed for onTouchTap
//			Note: This should only be instantiated once!
//			Reference: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const render = (RootComponent) => {
	ReactDOM.render(
		<AppContainer>
			<RootComponent store={store} history={syncHistory}/>
		</AppContainer>,
		document.getElementById('app')
	);
};

render(Root);

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		const NewRoot = require('./containers/Root');
		render(NewRoot);
	});
}
