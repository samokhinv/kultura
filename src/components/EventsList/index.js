import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import EventsListItem from '../EventsListItem';
import './index.css';

const EventsList = props => (
  <Group className="events-list" title="Ближайшие мероприятия">
    <List>
      { props.events.map((e) => (
        <EventsListItem event={e} go={props.go} />
      )) }
    </List>
  </Group>
);

EventsList.propTypes = {
	events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.any,
    subject: PropTypes.any,
  })),
  go: PropTypes.func,
};

export default EventsList;
