import React from 'react';
import PropTypes from 'prop-types';
import { HeaderButton, PanelHeader } from '@vkontakte/vkui';
// import Icon24Back from '@vkontakte/icons/dist/28/chevron_back';

export default (props) => (
  <PanelHeader
    left={<HeaderButton>Back</HeaderButton>}
  >{ props.title }</PanelHeader>
)
