import React from 'react'
/*

Context is used to share data, make it available for a tree of components.
current authenticated user information, theme


*/

const ThemeContext = React.createContext('light')

class ContextTest extends React.PureComponent {
	render () {
		return (
			<ThemeContext.Provider value='dark'>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}

function ToolBar (props) {
	return (
		<div>
			<ThemedButton />
		</div>
	)
}

/*
	Assign a contextType static variable with context
	then Find closest theme provider above and use its value
	value will be this.context
	Context is used when some data need to be accessible by many
	components at different nesting levels.
	
*/
class ThemedButton extends React.PureComponent {
	static contextType = ThemeContext
	
	render () {
		return (
			<Button theme={this.context}>
				Theme Button
			</Button>
		)
	}
}
