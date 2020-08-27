import React, { Component } from 'react';
import Normalize from 'react-normalize';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import api from './api';

import './fontawesome';
/* flaticon */
import './assets/font/flaticon.css';
import './assets/sass/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {

    this.setState({ loading: true, error: null });

    try {
      const data = await api.members.list();
      this.setState({ data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { data } = this.state;
    if (data) {
      return (
        <>
          <Normalize />
          <Navbar members={data} />
          <Header />
          <Main />
          <Footer />
        </>
      );
    }
    return <h1>Loading</h1>;

  }
};

export default App;
