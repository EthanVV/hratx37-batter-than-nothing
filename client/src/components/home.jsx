import React from 'react';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridAutoRows: 'minmax(150px, auto)',
  gridGap: '10px',
  backgroundColor: 'lightgrey'
}

const bannerImage = {
  backgroundColor: 'lightyellow',
  gridColumn: '1 / 6',
  gridRow: '1 / 4'
}

const leftItem = {
  textAlign: 'center',
  backgroundColor: 'lightpink',
  gridColumn: '2',
  gridRow: '4/5'
}

const rightItem = {
  textAlign: 'center',
  backgroundColor: 'lightblue',
  gridColumn: '4',
  gridRow: '4/5'
}
const getStarted = {
  backgroundColor: 'grey',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer'
}

const Home = (props) => {
  return (
    <div classname='wrapper' style={wrapper}>
      <div style={bannerImage}></div> 
      <div style={leftItem}>
        <a href="https://via.placeholder.com/350x150?text=Customize+Image"><img src="https://via.placeholder.com/350x150?text=Customize+Image"/></a>
        <p>Customize</p>
        <button style={getStarted} type="button" onClick={() => props.handleRoute('customize')}>
          Get Started
        </button>
      </div>
      <div style={rightItem}>
        <a href="https://via.placeholder.com/350x150?text=Customize+Image"><img src="https://via.placeholder.com/350x150?text=Order+Image"/></a>
        <p>Order</p>
        <button style={getStarted} type="button" onClick={() => props.handleRoute('donuts')}>Get Started</button>
      </div>
    </div>
  )
};

export default Home;