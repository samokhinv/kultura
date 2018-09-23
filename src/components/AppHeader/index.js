import React from 'react';
import PropTypes from 'prop-types';
import { HeaderButton, Div, PanelHeader } from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';

import './index.css';

const goBack = (url, go) => {
  const back = url.split('/')[0]

  go(back);
}

export default (props) => (
  // <div className="app-header">
    <PanelHeader
      left={(
      props.showBack && (<HeaderButton onClick={() => goBack(props.id, props.go)}>
        <Icon24BrowserBack />
      </HeaderButton>)
      )}
    >{ props.title }</PanelHeader>
  // </div>
)
