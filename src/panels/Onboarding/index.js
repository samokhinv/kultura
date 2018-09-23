import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Select, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import Loader from 'react-loader-spinner'


import Background from './icon.png';
import './index.css';
import { withFirestore } from 'react-firestore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  componentDidMount() {
    if (this.props.ourUser != null) {
      this.props.go('events');
    }
  }

  submitStart() {
    this.setState({ loading: true });
    this.props.firestore.collection('users').add({
      user_id: this.props.user.id,
    }).then(() => {
      this.setState({ loading: false });
      this.props.go('events')
    });

  }

	render() {
  return <Panel id={this.props.id}>
    <div class="onboarding">
      <img class="onboarding__background" src={Background}></img>

      <div class="onboarding__info">
        <h1 class="onboarding__info-title">Культурный студент</h1>
        <span class="onboarding__info-text">Добро пожаловать! Все спектакли, выставки и культурные мероприятия в одном удобном месте!</span>


        <Select class="onboarding__info-select" placeholder="Выбрать ВУЗ">
          <option value="m">МФТИ</option>
        </Select>
        <div style={{ marginTop: 16 }}>
          <Button onClick={this.submitStart.bind(this)} size="xl" level="secondary">
        { this.state.loading 
        ? <Loader 
        type="ThreeDots"
        color="#333"
        height="20"	
        width="80"
        />   
        : 'Начать' }
          </Button>
        </div>
      </div>
      <div class="onboarding__help" ><Button size="l" style={{color: '#fff', fontSize: 24 }} level="tertiary">Помощь</Button></div>       

    </div>
  </Panel>
  }
};

export default withFirestore(Home);
