import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import FriendAvatar from '../FriendAvatar';
import './index.css';

const friends = [
  {
    url: 'https://m.vk.com/cardoholic',
    image: 'https://pp.userapi.com/c850232/v850232599/21045/jEy0VUOmxv8.jpg?ava=1',
  }, 
  {
    url: 'https://vk.com/vlk_smkhn',
    image: 'https://pp.userapi.com/c636616/v636616883/35008/04KD5JIHnoI.jpg?ava=1',
  },
  {
    url: 'https://vk.com/burnyshef',
    image: 'https://pp.userapi.com/c844520/v844520989/9522e/ExTL6pzUews.jpg?ava=1',
  }, 
]

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

      { props.event.id === '2ICq3TAIfZyDMqlE9HuP' && <div className="row">
        <div className="col">
          Ваши друзья идут:
         <FriendAvatar { ...friends[0] } ></FriendAvatar>
        </div>
      </div>
      }

      { props.event.event_id === 'EWo9IJDqVTx8kdBde9H9' && <div className="row">
        <div className="col">
          Ваши друзья идут:
         <FriendAvatar { ...friends[1] } ></FriendAvatar>
        </div>
      </div>
      }

      { props.event.event_id === 'Gln1VIhbDEqpjGK9WIDF' && <div className="row">
        <div className="col">
          Ваши друзья идут:
         <FriendAvatar { ...friends[2] } ></FriendAvatar>
        </div>
      </div>
      }

      { props.event.id === 'Myzs2XVNsn1vSiY5F3mZ' && <div className="row">
        <div className="col">
          Ваши друзья идут:
         <FriendAvatar { ...friends[2] } ></FriendAvatar>
         <FriendAvatar { ...friends[0] } ></FriendAvatar>
         <FriendAvatar { ...friends[1] } ></FriendAvatar>
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
