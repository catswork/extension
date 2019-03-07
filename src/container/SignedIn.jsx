import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'

import state from 'state/state'

import SearchPeople from './SearchPeople'

import MainDisplay from 'presentation/Main'

@observer
class SignedIn extends React.Component {

	@observable _$page

	componentWillMount() {
		this._$page = 'main'
	}

	render() {
		if (state.$tab === 'track') {
			switch (this._$page) {
				case 'main':
					return (
						<MainDisplay onSearchPeople={this._onSetPage.bind(null, 'searchPeople')}
							onAddPerson={this._onSetPage.bind(null, 'addPerson')}
							onSearchApplications={this._onSetPage.bind(null, 'searchApplications')}
							onAddApplication={this._onSetPage.bind(null, 'addApplication')} />
					)
				case 'searchPeople':
					return <SearchPeople />
			}

			return null
		}
		else {
			return null
		}
	}

	@action
	_onSetPage = (page) => {
		this._$page = page
	}

}

export default SignedIn
