import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';

function App(){
  return (
    <div className='container'>
      <Header/>
      <div className='row'>
        <MarketSchedule/>
        <AvailableProduce/>
      </div>
    </div>
  );
}

export default App;
