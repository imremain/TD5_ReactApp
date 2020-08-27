import React from 'react';
import Normalize from 'react-normalize';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import './fontawesome';
/* flaticon */
import './assets/font/flaticon.css';
import './assets/sass/main.scss';

function App() {
  return (
    <div className='App'>
      <Normalize />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
