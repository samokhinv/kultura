import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import EventsList from '../components/EventsList';
import CategoriesGallery from '../components/CategoriesGallery';
import AppHeader from '../components/AppHeader';

console.log(AppHeader);

const Home = props => (
	<Panel id={props.id}>
		<AppHeader id={props.id} go={props.go}></AppHeader>
		<CategoriesGallery></CategoriesGallery>
		{props.fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={<Avatar src={props.fetchedUser.photo_200}/>}
				description={props.fetchedUser.city.title}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</ListItem>
		</Group>}
		<EventsList events={props.events} go={props.go} ></EventsList>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
