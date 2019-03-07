import React from 'react'

import styles from './button.less'

const Button = (props) => {
	let { className, icon, alt, children, ...rest } = props
	if (className) {
		className = `${styles.button} ${alt ? styles.alt : ''} ${className}`
	}
	else {
		className = styles.button
	}

	return (
		<a className={className} {...rest}>
			{icon ? <i className={`${styles.icon} ${icon}`} /> : null}
			{children}
		</a>
	)
}

export default Button
