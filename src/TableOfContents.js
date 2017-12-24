import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

class TableOfContents extends Component {
	state = {
		page: ''
	}
	componentWillMount() {
		console.log('TableOfContents');
		console.log('TableOfContents state', this.state);
		console.log('TableOfContents props', this.props);
	}

	setPage(string) {
		this.setState({ page: string });
	}

	renderComponent() {
		switch (this.props.reduxPage) {
			case 'employee list':
				return(
					<EmployeeList />
				);
			default:
				return (
					<LoginForm />
				);
		};
	};

	render() {
		return (
			<View style={{ margin: 5 }}>
				{this.renderComponent()}
			</View>
		);
	};
};

const mapStateToProps = ({ auth }) => {
	const { reduxPage } = auth;
	return { reduxPage };
};

export default connect(mapStateToProps)(TableOfContents);