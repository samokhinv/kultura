import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import './index.css';

const EventsListItem = props => (
  <Cell>
    <Div onClick={(e) => props.go(e)} data-to={`events/${props.event.id}`}  className="containter event-list-item">
      <div className="row">
        <div className="col col-4">
          <div className="event-list-item__image"></div>
        </div>
        <div className="col col-8 event-list-item__content">
          <span className="event-list-item__title">{ props.event.title }</span>
          <div className="event-list-item__info">
            <div className="event-list-item__subject">{ props.event.subject }</div>
            <span class="event-list-item__info-divider">·</span>
            <div className="event-list-item__date">{ props.event.date }</div>
          </div>        
        </div>
      </div>
    </Div>
  </Cell>
);

EventsListItem.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.any,
    subject: PropTypes.any,
  }),
};

export default EventsListItem;
