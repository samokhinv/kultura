import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import Home from './panels/Home';
import Event from './panels/Event';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'events',
			fetchedUser: null,
			events: [
				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
					id: 1,
					friends: [{
						photo_100: 'https://pp.userapi.com/c850232/v850232599/21045/jEy0VUOmxv8.jpg?ava=1'
					}]
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
					id: 2,
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
					id: 3,
					friends: [{
						photo_100: 'https://pp.userapi.com/c636616/v636616883/35008/04KD5JIHnoI.jpg?ava=1',
					}]
				},
				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
					id: 4,
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
					id: 5,
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
					id: 6,
				},
			],
		};
	}

	componentDidMount() {
		console.log("FUCKED")
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		if (typeof e == 'string') {
			this.setState({ activePanel: e })
		} else {
			this.setState({ activePanel: e.currentTarget.dataset.to })
		}
	};

	getScreens = () => {
		return [
			<Home id="events" fetchedUser={this.state.fetchedUser} events={this.state.events} go={this.go} />,
			...this.state.events.map((e, i) => (
				<Event key={e.id} id={`events/${e.id}`} go={this.go} event={e}></Event>
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

export default App;
