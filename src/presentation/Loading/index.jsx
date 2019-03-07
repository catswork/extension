import React from 'react'

import styles from './loading.less'

class Loading extends React.Component {

	state = { hidden: true }

	componentDidMount() {
		setTimeout(() => {
			this.setState({ hidden: false })
		}, 500)
	}

	render() {
		return this.state.hidden && this.props.delay ? null : <div className={styles.loading} />
	}

}

export default Loading
