import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			events: [
				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},
				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},
				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},
				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},

				{
					type: 'Музей',
					title: 'ШЕДЕВРЫ ЖИВОПИСИ И ГРАВЮРЫ ЭПОХИ ЭДО',
					subject: 'Пушкинский музей',
					date: Date.now(),
				},
			],
		};
	}

	componentDidMount() {
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
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} events={this.state.events} go={this.go} />
				<Persik id="persik" go={this.go} />
			</View>
		);
	}
}

export default App;
