import React from 'react';
import { Link } from 'react-router-dom'

function Header (){
  return (
    <div>
      <h1>Avery's Organics</h1>
      <Link to="/">Home</Link> | <Link to="/marketschedule">Buy Our Produce </Link> | <Link to="/availableproduce">Seasonal Produce</Link> | <Link to="/aboutus">About Us</Link>
    </div>
  );
}

export default Header;
