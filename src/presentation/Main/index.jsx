import React from 'react'

import Button from '../Button'

import styles from './main.less'

const Main = (props) => (
	<div className={styles.container}>
		<h3 className={styles.header}><span className={styles.border}>People</span></h3>
		<div className={styles.buttonContainer}>
			<Button icon='fas fa-search'
				className={styles.button}
				onClick={props.onSearchPeople}>Search people</Button>
			<Button icon='fas fa-plus'
				className={styles.button}
				onClick={props.onAddPerson}>Add new person</Button>
		</div>
		<h3 className={styles.header}><span className={styles.border}>Applications</span></h3>
		<div className={styles.buttonContainer}>
			<Button icon='fas fa-search'
				className={styles.button}
				onClick={props.onSearchApplications}>Search applications</Button>
			<Button icon='fas fa-plus'
				className={styles.button}
				onClick={props.onAddApplication}>Add new application</Button>
		</div>
		<div className={styles.divider} />
		<div className={styles.buttonContainer}>
			<Button icon='fas fa-hands-helping' alt className={styles.button}>NCA resources</Button>
			<Button icon='fas fa-comment' alt className={styles.button}>Leave feedback</Button>
			<Button icon='fas fa-question-circle' alt className={styles.button}>Help</Button>
		</div>
		<div className={styles.links}>
			<a className={styles.link} href='http://www.catswork.io/terms-of-service/' target='_blank'>Terms of service</a>
			<a className={styles.link} href='http://www.catswork.io/privacy-policy/' target='_blank'>Privacy policy</a>
		</div>
	</div>
)

export default Main
