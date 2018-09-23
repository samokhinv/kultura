import React from 'react';
import PropTypes from 'prop-types';
import { Panel, CellButton, InfoRow, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Linked from '@vkontakte/icons/dist/24/linked';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import Icon24UserAdded from '@vkontakte/icons/dist/24/user_added';

import AppHeader from '../../components/AppHeader';
import { FirestoreCollection, withFirestore } from 'react-firestore';

import './index.css';
import firebase from '../../firebase'
var storage = firebase.storage();

class Event extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);

    this.state = { image: '' }
    if (this.props.event.place.logo.path) {
      storage.ref(this.props.event.place.logo.path).getDownloadURL().then((u) => {
        this.setState({ image: u });
      })
    }
  }
  render() {
    console.log(storage.ref(this.props.event.place.logo.path).getDownloadURL().then((url)=> url))
    return (<Panel className="event-detail" id={this.props.id}>
		<AppHeader showBack id={this.props.id} go={this.props.go}></AppHeader>
    <div className="event-detail__image-container">
      <span className="event-detail__organizer-logo">
        <img className="event-detail__organizer-logo-img" src={this.state.image}></img>
      </span>
      <span className="event-detail__title">{this.props.event.name}</span>
      <img class="event-detail__image" src={this.props.event.photo}></img>
    </div>
    <Div style={{ background: '#fff' }}>
       <Button size="xl" level="primary">Записаться</Button>
    </Div>

      <List className="event-detail__info">
        <Cell before={<Icon24Recent />}>
          <InfoRow title="Дата проведения">
            { this.props.event.date }
          </InfoRow>
        </Cell>

        <Cell before={<Icon24MoneyCircle />}>
          <InfoRow title="Цена">
            { this.props.event.price } ₽
          </InfoRow>
        </Cell>
        <Cell before={<Icon24Place />}>
          <InfoRow title="Организатор">
          <a href="http://vk.com">{ this.props.event.place.name }</a>
          <CellButton style={{ paddingLeft: 0}}>Подписаться на события от этого организатора</CellButton>
          </InfoRow>
        </Cell>
        <Cell before={<Icon24UserAdded />}>
          <InfoRow title="Осталось мест">
          { this.props.event.number_of_tickets }
          </InfoRow>
        </Cell>
        <Cell before={<Icon24Linked />}>
          <InfoRow title="Ссылка на событие">
            <a href={this.props.event.link}>{this.props.event.link}</a>
          </InfoRow>
        </Cell>
        <Cell before={<Icon28InfoOutline />}>
          <InfoRow title="Описание">
            { this.props.event.description }
          </InfoRow>
        </Cell>

      </List>
  </Panel>)
  }
}



export default Event;