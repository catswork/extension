import React from 'react'

import config from 'config'

import styles from './nav.less'

const Nav = (props) => {
	if (props.signedIn) {
		return (
			<nav className={[styles.nav, styles.signedIn].join(' ')}>
				<div className={styles.tabs}>
					<a className={[styles.tab, styles.tabTrack, props.tab === 'track' ? styles.tabActive : ''].join(' ')} onClick={props.onTabSelect.bind(null, 'track')} />
					<a className={[styles.tab, styles.tabChat, props.tab === 'chat' ? styles.tabActive : ''].join(' ')} onClick={props.onTabSelect.bind(null, 'chat')} />
				</div>
				<a className={styles.user} href={`${config.server.url}profile`} target='_blank' />
			</nav>
		)
	}
	else {
		return (
			<nav className={[styles.nav, styles.signedOut].join(' ')}>
				<div className={styles.logo}></div>
			</nav>
		)
	}
}

export default Nav
