import { Link, useNavigate } from 'react-router-dom';
import {auth,db} from '../firebase';
import { getDoc, collection, doc, setDoc} from 'firebase/firestore';

const News = ({newsData}) => {
  const navigate = useNavigate();

  // handling favourite buton using firebase db
  const addToFavorites = async (newsItem) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const favoritesCollection = collection(db, 'users', user.uid, 'favorites');
        const existingDocRef = doc(favoritesCollection, newsItem.title);
        const existingDocSnapshot = await getDoc(existingDocRef);
        if (!existingDocSnapshot.exists()) {
          await setDoc(existingDocRef, newsItem);
          alert('Added to favorites!');
          navigate('/favorites'); 
        } else {
          alert('Already in favorites!');
        }
      } catch (error) {
        alert('error in adding');
        console.error('Error adding to favorites:', error);
      }
    } else {
      alert('Please log in to add to favorites!');
    }
  };
  
  return (
    <div className="news">
      <h1>Top News - India</h1>
      <div className="news-container">
        {newsData?.map((news, index) => <div><button onClick={()=>addToFavorites(news)}>❤️</button><Link to={`/news/${index}`} key={index}><img src={news.urlToImage ? news.urlToImage : 'http://i.huffpost.com/gen/4707746/images/o-BREAKING-NEWS-facebook.jpg'} alt={news.title}/>
        <h4>{news.title}</h4></Link></div>)}
      </div>
    </div>
  )
}

export default News