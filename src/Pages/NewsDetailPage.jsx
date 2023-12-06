import React from 'react';
import Navbar from '../components/Navbar';
import NewsDetail from '../components/NewsDetail';


const NewsDetailPage = ({newsData}) => {
  return (
    <>
        <Navbar />
        <NewsDetail newsData={newsData}/>
    </>
  )
}

export default NewsDetailPage;