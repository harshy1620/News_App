import React from 'react';
import News from '../components/News';
import Navbar from '../components/Navbar';

const HomePage = ({newsData}) => {
  return (
    <>
        <Navbar />
        <News newsData={newsData}/>
    </>
  )
}

export default HomePage;