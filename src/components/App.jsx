import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';

function App(){
  return (
    <div className='container'>
      <Header/>
      <div className='row'>
        <MarketSchedule/>
      </div>
    </div>
  );
}

export default App;
