import React from 'react';
import vkConnect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Home from './panels/Home';
import Event from './panels/Event';

import { FirestoreCollection } from 'react-firestore';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'


var event_types = {1:'Театр', 2:'Выставка', 3:'Концерт'};
class App extends React.Component {
	constructor(props) {
		super(props);
		const events = props.events.map((e) => {
			const description = props.descriptions.find(({ id }) => e.event_id === id);
			return { ...e, ...description };
		})

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			events,
		};
		
		// };
	}

	componentDidMount() {
		vkConnect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		vkConnect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	getScreens = () => {
		return [
			<Home id="home" fetchedUser={this.state.fetchedUser} events={this.state.events} go={this.go} />,
			...this.state.events.map((e, i) => (
				<Event key={e.id} id={`event_${e.id}`} event={e}></Event>
			)),
		]
	}

	render() {
		const res = (
			<View activePanel={this.state.activePanel}>
				{ this.getScreens() }
			</View>
		);

		return res;
	}
}

const WithEvents = () => <FirestoreCollection
path="list_of_events"
sort=""
render={({ isLoading: isLoadingEvents, data: events }) => (
	<FirestoreCollection
		path="events"
		sort=""
		render={({ isLoading: isLoadingEventsDescriptions, data: descriptions })	=> (!isLoadingEvents && !isLoadingEventsDescriptions && <App { ...{ events, descriptions } }></App>)}
	>
	</FirestoreCollection>
)}
>
</FirestoreCollection>


export default WithEvents;