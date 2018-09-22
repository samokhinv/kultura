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

import './index.css';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Panel className="event-detail" id={this.props.id}>
		<AppHeader showBack id={this.props.id} go={this.props.go}></AppHeader>
    <div className="event-detail__image-container">
      <span className="event-detail__organizer-logo"></span>
      <span className="event-detail__title">{this.props.event.title}</span>
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
            Бесплатно
          </InfoRow>
        </Cell>
        <Cell before={<Icon24Place />}>
          <InfoRow title="Организатор">
          <a href="http://vk.com">Пушкинский музей</a>
          </InfoRow>
        </Cell>
        <Cell before={<Icon24UserAdded />}>
          <InfoRow title="Осталось мест">
            10
          </InfoRow>
        </Cell>
        <Cell before={<Icon24Linked />}>
          <InfoRow title="Ссылка на событие">
            <a href="http://vk.com">http://vk.com</a>
          </InfoRow>
        </Cell>
        <Cell before={<Icon28InfoOutline />}>
          <InfoRow title="Описание">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </InfoRow>
        </Cell>

        <CellButton>Подписаться на события от этого организатора</CellButton>
      </List>
  </Panel>)
  }
}