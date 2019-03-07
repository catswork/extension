import { observer } from 'mobx-react'
import React from 'react'

import state from 'state/state'

import AppDisplay from 'presentation/App'

@observer
class App extends React.Component {

	componentWillMount() {
		state.load()
	}

	render() {
		if (state.$user === undefined) {
			return <AppDisplay loading={true} />
		}

		return <AppDisplay signedIn={!!state.$user} tab={state.$tab} onTabSelect={this._onTabSelect} />
	}

	_onTabSelect = (tab) => {
		state.setTab(tab)
	}

}

export default App
