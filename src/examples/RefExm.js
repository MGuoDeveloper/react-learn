import React from 'react'

function CustomInput (props) {
	return (
		<input ref={props.inputRef} />
	)
}

class Parent extends React.Component {
	constructor (props) {
		super(props)
		this.inputRef = React.createRef()
	}

	focusChildInput = () => {
		this.inputRef.current.focus()
	}

	render (
		<CustomInput inputRef={this.inputRef} />
	)
}

export default Parent