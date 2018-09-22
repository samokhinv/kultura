import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Gallery, colors, ListItem, List, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

import theatre from './theatre.jpg';
import fest from './fest.jpg';
import exhibition from './exhibition.jpg';

import './index.css';

const CategoriesGallery = props => (
  <Gallery
    slideWidth="100%"
    align="center"
    bullets="light"
    className="categories-gallery"
  >
    <div 
      className="categories-gallery__item"
    >
      <h2 className="categories-gallery__item-title">Театры</h2>
      <img className="categories-gallery__item-image" src={theatre}></img>
    </div>

    <div 
      className="categories-gallery__item"
    >
      <h2 className="categories-gallery__item-title">Выставки</h2>
      <img className="categories-gallery__item-image" src={exhibition}></img>
    </div>

    <div 
      className="categories-gallery__item"
    >
      <h2 className="categories-gallery__item-title">Фестивали</h2>
      <img className="categories-gallery__item-image" src={fest}></img>
    </div>
  </Gallery>
);

export default CategoriesGallery;
