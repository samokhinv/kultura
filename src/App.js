import React from 'react';
import vkConnect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Home from './panels/Home';
import Event from './panels/Event';
import Onboarding  from './panels/Onboarding';

import 'moment/locale/ru'
import moment from 'moment';
import { FirestoreCollection } from 'react-firestore';

moment.locale('ru');

var event_types = {1:'Театр', 2:'Выставка', 3:'Концерт'};
class App extends React.Component {
	constructor(props) {
		super(props);
		const events = props.events.map((e) => {
			const description = props.descriptions.find(({ id }) => e.event_id === id);
			if (description) {
			const place = props.places.find((p) => {
				return description.place_id === p.id
			})
			const visitors = props.requests.filter(({ event_id }) => event_id === e.id);
			const res = { ...description, ...e, date:  moment().to(e.time), place, visitors };
			return res;
			} else {
				return undefined;
			}
		}).filter(e => e != null);

		this.state = {
			activePanel: props.ourUser ? 'events' : 'onboarding',
			fetchedUser: {
				id: '142581662',
			},
			events,
		};
	}

	componentDidMount() {
		
	}

	go = (e) => {
		if (typeof e === 'string') {
			this.setState({ activePanel: e })
		} else {
			this.setState({ activePanel: e.currentTarget.dataset.to })
		}
	};

	getScreens = () => {
		return [
			<Home id="events" user={this.state.fetchedUser} events={this.state.events} go={this.go} />,
			<Onboarding id="onboarding" ourUser={this.props.ourUser} user={this.props.user} go={this.go} />,
			...this.state.events.map((e, i) => (
				<Event key={e.id} user={this.state.fetchedUser} id={`events/${e.id}`} event={e} go={this.go}></Event>
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

const WithEvents = (Component) => (props) => <div><FirestoreCollection
path="list_of_events"
sort="time:asc"
render={({ isLoading: isLoadingEvents, data: events }) => (
	<FirestoreCollection
		path="events"
		sort=""
		render={({ isLoading: isLoadingEventsDescriptions, data: descriptions })	=> (!isLoadingEvents && !isLoadingEventsDescriptions && <Component { ...{ events, descriptions, ...props } }></Component>)}
	>
	</FirestoreCollection>
)}
>
</FirestoreCollection></div>


const WithPlaces = (Component) => (props) => <FirestoreCollection
	path="places"
	render={({ isLoading, data }) => !isLoading && <Component places={data} {...props}></Component> }>
	</FirestoreCollection>


const WithRequests = (Component) => (props) => <FirestoreCollection
	path="requests"
	render={({ isLoading, data }) => !isLoading && <Component requests={data} {...props}></Component> }>
	</FirestoreCollection>


const WithUser = (Component) => (props) => {
	vkConnect.subscribe((e) => {
		switch (e.detail.type) {
			case 'VKWebAppGetUserInfoResult':
				return <Component user={e.detail.data} {...props}></Component>
				break;
			default:
				return <Component user={{
					id: '142581662',
				}} {...props}></Component>
		}
	});
	vkConnect.send('VKWebAppGetUserInfo', {});

	return <Component user={{
		id: '142581662',
	}} {...props}></Component>;
}

const WithOurUser = (Component) => (props) => <FirestoreCollection
path="users"
filter={['user_id', '==', props.user.id]}
render={({ isLoading, data }) => !isLoading && <Component ourUser={data[0]} {...props}></Component> }>
</FirestoreCollection>

export default WithUser(WithOurUser(WithRequests(WithEvents(WithPlaces(App)))));