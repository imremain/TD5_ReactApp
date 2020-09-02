import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

class Carousel extends Component {
  constructor(props) {
    super(props);
    const { items, active } = this.props;
    this.state = {
      items,
      active,
      direction: '',
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  selected() {
    const seleccion = this.generateItems()[2].key;
    const { selected } = this.props;
    selected(seleccion);
  }

  generateItems() {
    let level;
    const itemsArray = [];
    const { active, items } = this.state;
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = active - i;
      itemsArray.push(
        <Item key={items.length} fullname={items[index].fullname} photo={items[index].photo} level={level} />,
      );
    }
    return itemsArray;
  }

  moveLeft() {
    const { active, items } = this.state;
    let newActive = active;
    newActive--;
    this.setState({
      active: newActive < 0 ? items.length - 1 : newActive,
      direction: 'left',
    }, this.selected);
  }

  moveRight() {
    const { active, items } = this.state;
    const newActive = active;
    this.setState({
      active: (newActive + 1) % items.length,
      direction: 'right',
    }, () => this.selected());
  }

  render() {
    const { direction } = this.state;
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={direction}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >

          <div className='slide__group'>
            {this.generateItems()}
          </div>
        </ReactCSSTransitionGroup>

        <div className='slide__buttons'>
          <div className='slide__buttons-single' onClick={this.leftClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className='slide__buttons-single' onClick={this.rightClick}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
