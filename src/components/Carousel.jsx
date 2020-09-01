import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';
import '../assets/sass/carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: '',
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    const items = [];
    let level;
    console.log(this.state.active);
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item key={index} fullname={this.state.items[index].fullname} photo={this.state.items[index].photo} level={level} />,
      );
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left',
    });
  }

  moveRight() {
    const newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right',
    });
  }

  render() {
    return (
      <div id='carousel' className='noselect'>
        <div className='arrow arrow-left' onClick={this.leftClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>

        <ReactCSSTransitionGroup
          transitionName={this.state.direction}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.generateItems()}
        </ReactCSSTransitionGroup>

        <div className='arrow arrow-right' onClick={this.rightClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    );
  }
}

export default Carousel;
