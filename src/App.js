import React from 'react';
import vkConnect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Home from './panels/Home';
import Event from './panels/Event';

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
				// console.log(id, description.place_id);
				return description.place_id === p.id
			})
			const res = { ...description, ...e, date:  moment().to(e.time), place };
			return res;
			} else {
				return undefined;
			}
		}).filter(e => e != null);

		this.state = {
			activePanel: 'events',
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
		if (typeof e === 'string') {
			this.setState({ activePanel: e })
		} else {
			this.setState({ activePanel: e.currentTarget.dataset.to })
		}
	};

	getScreens = () => {
		return [
			<Home id="events" fetchedUser={this.state.fetchedUser} events={this.state.events} go={this.go} />,
			...this.state.events.map((e, i) => (
				<Event key={e.id} id={`events/${e.id}`} event={e} go={this.go}></Event>
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
limit={5}
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

export default WithEvents(WithPlaces(App));