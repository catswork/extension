import React from 'react'

import SignedIn from 'container/SignedIn'

import Nav from '../Nav'
import Loading from '../Loading'
import SignIn from '../SignIn'

import styles from './app.less'

const App = (props) => {
	if (props.loading) {
		return (
			<section>
				<Nav signedIn={false} />
				<Loading delay />
			</section>
		)
	}

	let content
	if (props.signedIn) {
		content = <SignedIn />
	}
	else {
		content = <SignIn />
	}

	return (
		<section>
			<Nav signedIn={props.signedIn} tab={props.tab} onTabSelect={props.onTabSelect} />
			<div className={styles.content}>{content}</div>
		</section>
	)
}

export default App
