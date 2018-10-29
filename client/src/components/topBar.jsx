import React from 'react';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: '300px 1fr 400px',
  gridAutoRows: 'minmax(50, auto)',
  gridGap: '10px',
  backgroundColor: 'lightgrey'
}
const title= {
  fontSize: '250%',
  fontWeigth: 'bold',
  paddingLeft: '10px',
  gridColumn: '1'
}
const navWrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '5px',
  gridColumn: '3',
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