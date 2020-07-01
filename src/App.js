import React from 'react';
import './App.scss';
import Header from './components/Header'
import RechargeAndBills from './components/RechargeAndBills';
import Brands from './components/Brands';

function App() {
  return (
    <div className="app">
      <Header />
      <RechargeAndBills />
      <div className='brands'><Brands /></div>

    </div>
  );
}

export default App;
