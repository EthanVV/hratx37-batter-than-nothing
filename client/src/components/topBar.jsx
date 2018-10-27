import React from 'react';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: '50px',
  gridGap: '10px',
  backgroundColor: 'lightgrey'
}
const title= {
  fontSize: '250%',
  fontWeigth: 'bold',
  paddingLeft: '10px',
  gridColumn: '1 / 8'
}
const navWrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '5px',
  gridColumn: '8/11'
}
const nav = {
  backgroundColor: 'grey',
  textAlign: 'center'
}


class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div style={wrapper}>
      <div style={title}>The Donut Shop!</div>
      <div style={navWrapper}>
        <div style={nav} onClick={()=>this.props.handleRoute('home')}><p>Home</p></div>
        <div style={nav} onClick={()=>this.props.handleRoute('donuts')}><p>Donuts</p></div>
        <div style={nav} onClick={()=>this.props.handleRoute('customize')}><p>Customize</p></div>
        <div style={nav} onClick={()=>this.props.handleRoute('cart')}><p>Cart - {this.props.cartList.length}</p></div>
      </div>
    </div>
    );
  }
}

export default TopBar;