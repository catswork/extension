import { observable, action } from 'mobx'

import Status from 'services/Status'
import User from 'models/User'

class State {

	@observable.ref $user = undefined
	@observable $tab = 'track'

	load() {
		Status.status().then(action((status) => {
			this.$user = status.user ? new User(status.user.id, status.user.email) : null
		}))
	}

	@action
	setTab(tab) {
		this.$tab = tab
	}

}

export default new State()
