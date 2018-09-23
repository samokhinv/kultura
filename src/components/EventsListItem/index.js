import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import FriendAvatar from '../FriendAvatar';
import './index.css';

const EventsListItem = props => (
  <Cell>
    <Div onClick={(e) => props.go(e)} data-to={`events/${props.event.id}`}  className={`containter event-list-item ${props.event.friends && props.event.friends.length !== 0 && 'event-list-item--has-friends'}`} >
      <div className="row">
        <div className="col col-4">
          <div className="event-list-item__image-container">
            <img class="event-list-item__image" src={props.event.photo}></img>
          </div>
        </div>
        <div className="col col-8 event-list-item__content">
          <span className="event-list-item__title">{ props.event.name }</span>
          <div className="event-list-item__info">
            <div className="event-list-item__subject">{ props.event.place && props.event.place.name }</div>
            <span class="event-list-item__info-divider">·</span>
            <div className="event-list-item__date">{ props.event.date }</div>
          </div>        
        </div>
      </div>

      { props.event.friends && props.event.friends.length !== 0 && <div className="row">
        <div className="col">
          Ваши друзья идут:
          {  props.event.friends.map((f) => <FriendAvatar {...f} ></FriendAvatar>) }
        </div>
      </div>
      }
    </Div>
  </Cell>
);

EventsListItem.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.any,
    subject: PropTypes.any,
    place: PropTypes.object,
  }),
};

export default EventsListItem;
