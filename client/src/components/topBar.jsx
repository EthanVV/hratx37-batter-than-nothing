import React from 'react';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridAutoRows: '50px',
  gridGap: '10px',
  backgroundColor: 'lightgrey'
}
const home = {
  
}


const TopBar = (props) => (
  <div className='wrapper' style={wrapper}>
    <span>Donut Shop</span>
    <span>Home</span>
    <span>Dounuts</span>
    <span>Customize</span>
    <span>Cart</span>

  {/* <nav className='TopBarNav'>
    <a className='TopBarHome' onClick={() => props.onClick('home')}>Home</a>
    <a className='TopBarDonuts' onClick={() => props.onClick('donuts')}>Donuts</a>
    <a className='TopBarCustomize' onClick={() => props.onClick('customize')}>Customize</a>
    <a className='TopBarCart' onClick={() => props.onClick('cart')}>Cart</a>
  </nav> */}
  </div>
);

export default TopBar;