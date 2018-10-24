import React from 'react';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridAutoRows: 'minmax(150px, auto)',
  gridGap: '10px',
  backgroundColor: 'lightgrey'
}

const bannerImage = {
  backgroundColor: 'grey',
  gridColumn: '1 / 6',
  gridRow: '1 / 4'
}

const leftImage = {
  backgroundColor: 'grey',
  gridColumn: '2',
  gridRow: '5/6'
}

const rightImage = {
  backgroundColor: 'grey',
  gridColumn: '4',
  gridRow: '5/6'

}

const Home = (props) => {
  return (
    <div classname='wrapper' style={wrapper}>
      <div style={bannerImage}></div> 
      <div style={leftImage}></div>
      <div style={rightImage}></div>
    </div>
  )
};

export default Home;