import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import TableOfContents from './TableOfContents';
import Router from './Router';

class App extends Component {
	componentWillMount() {
	  var config = {
	    apiKey: 'AIzaSyAhXeovfGT9K2qsmTUdQiZNalHkNLy9W_c',
	    authDomain: 'managerthree-48d02.firebaseapp.com',
	    databaseURL: 'https://managerthree-48d02.firebaseio.com',
	    projectId: 'managerthree-48d02',
	    storageBucket: '',
	    messagingSenderId: '905961433776'
	  };
	  firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;