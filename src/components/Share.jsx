import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareMovie = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const key = process.env.REACT_APP_IMDB_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key${key}&language=en-US`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  const handleShare = (event, shareMedia) => {
    event.preventDefault();
    const shareUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key${key}&language=en-US`;
    const shareTitle = `${movie.title} (${movie.release_date.substr(0, 4)})`;
    const shareDescription = movie.overview;

    switch (shareMedia) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareTitle)}`, 'facebook-share-dialog', 'width=626,height=436');
        break;
      case 'twitter':
        const twitterText = `${shareTitle}: ${shareUrl}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`, 'twitter-share-dialog', 'width=626,height=436');
        break;
      case 'whatsapp':
        const whatsappText = `${shareTitle}: ${shareUrl}`;
        window.location.href = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
        break;
      default:
        console.warn('Invalid share media:', shareMedia);
    }
  };

  return (
    <div>
      {movie ? (
        <>
          <h2>Share this movie:</h2>
          <FacebookShareButton url={movie.url} onClick={(event) => handleShare(event, 'facebook')}>Facebook</FacebookShareButton>
          <TwitterShareButton url={movie.url} onClick={(event) => handleShare(event, 'twitter')}>Twitter</TwitterShareButton>
          <WhatsappShareButton url={movie.url} onClick={(event) => handleShare(event, 'whatsapp')}>Whatsapp</WhatsappShareButton>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShareMovie;
