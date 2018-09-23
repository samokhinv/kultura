import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import Home from './panels/Home';
import Event from './panels/Event';
import { Timestamp } from '@google-cloud/firestore';

// var admin = require("firebase-admin");

// var serviceAccount = require("./service_key.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://cfapp-b16dd.firebaseio.com"
// });

// var db = admin.firestore();

// var event_types = {1:'Театр', 2:'Выставка', 3:'Концерт'};
class App extends React.Component {
	constructor(props) {
		super(props);
		//var events_by_data = db.collection("list_of_events").orderBy("time").limit(5).get();
		this.state = {
			activePanel: 'home',
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
		// 	events: [],
		// };
		// var i = 1;
		// events_by_data.then(function(querySnapshot){
		// 	querySnapshot.forEach(function(doc){
		// 		console.log(doc)
		// 		var singleObj = {};
		// 		var d = doc.data();
		// 		var ev = db.collection('events').doc(d.type).data();
		// 		singleObj.type = event_types[ev.type];
		// 		singleObj.title = d.name;
		// 		singleObj.date = d.time.toDate();
		// 		singleObj.id = i++;
		// 		this.state.events.push(singleObj);
		// 	});
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

export default App;
