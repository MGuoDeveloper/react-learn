import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux;';

class FetchData extends React.PureComponent {
	constructor (props) {
		super(props);
		this.state = {
			data: null,
			page: 0,
			pageNums: []
		};
	}

	componentDidMount () {
		const {page} = this.state;
		this.fetchData(page);
	}

	componentDidUpdate (prevProps, prevState) {
		const {page} = this.state
		if (page !== prevState.page) {
			this.fetchData(page);
		}
	}

	fetchData = (page) => {
		const PAGE_QUERY = `page=${page}`
		fetch(API + DEFAULT_QUERY + PAGE_QUERY)
		.then(response => response.json())
		.then(data => {
			if (data) {
				const {nbPages, hits} = data;
				const pageNums = Array.from({length: nbPages}, (v, k) => k);
				this.setState({
					data: hits,
					pageNums 
				})
			}
			
		})
	}

	render () {
		const {data, pageNums} = this.state

		if (!data)
			return <div>Loading...</div>

		return (
			<ul>
				{data.map(({author, title, url, create_at_i}, x) => (
					<li key={x}>
						<b>{author}: </b> 
						<a href={url} rel='noopener noreferrer' target='_blank'>{title}</a>
					</li>
				))}
				Page: {pageNums.map(page => 
					<span style={{cursor: 'pointer'}}
					key={page} 
					onClick={() => this.setState({page})}>
						{page} </span>)}
			</ul>
		)
	}
}

export default FetchData;
