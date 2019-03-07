import React from 'react'

import config from 'config'

import Button from '../Button'

import styles from './sign-in.less'

const SignIn = () => (
	<div className={styles.container}>
		<h2 className={styles.hi}>Hi there!</h2>
		<h3 className={styles.welcome}>Welcome to CatsWork!</h3>
		<p>To start using the extension, sign in to the dashboard.</p>
		<Button href={`${config.server.url}sign-in`} target='_blank'>Sign in</Button>
	</div>
)

export default SignIn
