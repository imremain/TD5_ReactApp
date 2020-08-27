import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import Normalize from 'react-normalize';

import './assets/sass/main.scss';

function App() {
  return (
    <div className="App">
      <Normalize />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
