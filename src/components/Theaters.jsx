

import React from 'react';
import { FaFilm, FaMapMarker, FaStar,FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Theaters.css';

const Theaters = () => {
  const theaters = [
    { id: 1, name: 'Sarit Centre Cinemas', location: 'Westlands, Nairobi', description: 'Enjoy the latest blockbusters in a modern cinema complex.' },
    { id: 2, name: 'Prestige Cinema', location: 'Ngara, Nairobi', description: 'Experience a classic movie theater with a retro ambiance.' },
    { id: 3, name: 'Westgate Cinema', location: 'Westlands, Nairobi', description: 'Watch movies in a spacious multiplex with state-of-the-art facilities.' },
    { id: 4, name: 'Sarit Centre Cinemas', location: 'Westlands, Nairobi, Kenya', description: 'Enjoy the latest blockbusters in a modern cinema complex.' },
    { id: 5, name: 'Prestige Cinema', location: 'Ngara, Nairobi, Kenya', description: 'Experience a classic movie theater with a retro ambiance.' },
    { id: 6, name: 'Westgate Cinema', location: 'Westlands, Nairobi, Kenya', description: 'Watch movies in a spacious multiplex with state-of-the-art facilities.' },
    { id: 7, name: 'Ster-Kinekor', location: 'Johannesburg, South Africa', description: 'Discover a wide range of movies in a leading cinema chain.' },
    { id: 8, name: 'Nu Metro', location: 'Cape Town, South Africa', description: 'Enjoy the latest blockbusters with stunning views of Table Mountain.' },
    { id: 9, name: 'Silverbird Cinemas', location: 'Victoria Island, Lagos, Nigeria', description: 'Experience world-class cinema in the heart of Lagos.' },
    { id: 10, name: 'Genesis Deluxe Cinemas', location: 'Accra, Ghana', description: 'Discover the ultimate cinema experience in Accra.' },
    { id: 11, name: 'Century Cinemax', location: 'Kigali, Rwanda', description: 'Watch movies in a modern cinema with comfortable seating.' },
    { id: 12, name: 'Empire Cinemas', location: 'Dar es Salaam, Tanzania', description: 'Enjoy the latest movies in a vibrant cinema complex.' },
    { id: 13, name: 'Palms Mall Cinemas', location: 'Lekki, Lagos, Nigeria', description: 'Watch movies while shopping at a popular mall in Lagos.' },
    { id: 14, name: 'Century Cinemax', location: 'Junction Mall, Nairobi', description: 'Enjoy the latest movies in a modern cinema with comfortable seating.', rating: 4 },
    { id: 15, name: 'IMAX Garden City', location: 'Thika Road, Nairobi', description: 'Experience the immersive IMAX theater with stunning visuals and sound.', rating: 4.5 },
    { id: 16, name: 'Anga Diamond Plaza', location: 'Parklands, Nairobi', description: 'Watch a wide range of movies in a cozy theater with excellent service.', rating: 3.5 },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star-icon" />);
    }
    if (halfStar) {
      stars.push(<FaStar key="half" className="star-icon half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star-icon empty" />);
    }

    return stars;
  };

  return (
    <div className="theaters">
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        <FaHome className="navbar-icon" />
        Back To Home
      </Link>
      <Link to="/theaters" className="navbar-link active">
        Explore The Theaters Near You
      </Link>
    </nav>
    {/* <h2 className="theaters-title">Theaters</h2>
    <p className="theaters-subtitle">Explore the best theaters near you:</p> */}
    <div className="theaters-grid">
        {theaters.map(theater => (
          <div key={theater.id} className="theater-card">
            <h3 className="theater-name">{theater.name}</h3>
            <div className="theater-details">
              <FaFilm className="theater-icon" />
              <p className="theater-location">
                <FaMapMarker className="location-icon" />
                {theater.location}
              </p>
            </div>
            <div className="theater-rating">
              {renderStars(theater.rating)}
            </div>
            <p className="theater-description">{theater.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theaters;

