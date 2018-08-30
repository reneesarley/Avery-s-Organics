import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route exact path ='/' component={MarketSchedule}/>
        <Route path='/aboutus' component={AboutUs}/>
      // <MarketSchedule/>
      // <AvailableProduce/>
      // <AboutUs/>
      </Switch>
    </div>
  );
}

export default App;
