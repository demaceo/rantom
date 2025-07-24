import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./MovieCard.scss";

function MovieCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatRating = (rating) => {
    return Math.round(rating * 10) / 10; // Round to 1 decimal place
  };

  const formatYear = (dateString) => {
    return new Date(dateString).getFullYear();
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return 'rating-excellent';
    if (rating >= 6) return 'rating-good';
    if (rating >= 4) return 'rating-average';
    return 'rating-poor';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Card className="movie-card">
      <div className="movie-poster-container">
        {!imageLoaded && !imageError && (
          <div className="movie-poster-skeleton">
            <div className="skeleton-loader"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="movie-poster-placeholder">
            <div className="placeholder-icon">🎬</div>
            <div className="placeholder-text">No Image</div>
          </div>
        ) : (
          <Card.Img 
            className={`movie-poster ${imageLoaded ? 'loaded' : ''}`}
            src={props.poster} 
            alt={props.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        )}
        
        <div className="movie-overlay">
          <div className="movie-info">
            <Card.Title className="movie-title">{props.title}</Card.Title>
            <div className="movie-details">
              <div className="movie-year">
                <span className="detail-label">Year:</span>
                <span className="detail-value">{formatYear(props.release)}</span>
              </div>
              <div className="movie-rating">
                <span className="detail-label">Rating:</span>
                <span className={`rating-badge ${getRatingColor(props.rating)}`}>
                  ★ {formatRating(props.rating)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default MovieCard;
