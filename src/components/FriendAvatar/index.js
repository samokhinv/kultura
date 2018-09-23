import React from 'react';

import './index.css';

export default (props) => (
  <a href={props.url}>
    <img className="friend-avatar" src={props.image}></img>
  </a>
)