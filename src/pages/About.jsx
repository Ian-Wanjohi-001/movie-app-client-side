import AppBar from '../components/Appbar';
import './about.css'; 
import { RiMovie2Fill } from 'react-icons/ri';


const About = () => {
  return (<>
  <AppBar />
    <div className="about-page">
      <h2 className="title">
        <RiMovie2Fill className="title-icon" />
        About Movie App
      </h2>
      <p className="description">
        Welcome to the Movie App, your one-stop destination for discovering and exploring a wide
        range of movies. With our app, you can search for your favorite movies, view details, watch
        trailers, and read reviews.
      </p>
      <div className="features">
        <h3 className="features-title">Key Features</h3>
        <ul className="features-list">
          <li className="feature">
            <span className="feature-icon">
              <RiMovie2Fill />
            </span>
            Browse a vast collection of movies from various genres.
          </li>
          <li className="feature">
            <span className="feature-icon">
              <RiMovie2Fill />
            </span>
            View detailed information about each movie, including cast, crew, and ratings.
          </li>
          <li className="feature">
            <span className="feature-icon">
              <RiMovie2Fill />
            </span>
            Watch trailers to get a sneak peek into the movies.
          </li>
          <li className="feature">
            <span className="feature-icon">
              <RiMovie2Fill />
            </span>
            Read reviews from other users and leave your own reviews.
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;
