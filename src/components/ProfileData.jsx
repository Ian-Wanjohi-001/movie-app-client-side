import { useContext } from 'react';
import { Context } from '../context/userContext/context';
import AppBar from '../components/Appbar';
import './profiledata.css';
import { RiUserFill, RiMailFill } from 'react-icons/ri';

const ProfileData = () => {
  const { user } = useContext(Context);

  return (
    <div className="center-content">
      <div className="user-profile">
        <div className="avatar">
          <RiUserFill className="avatar-icon" />
        </div>
        <div className="user-info">
          <h2 className="username">{user.username}</h2>
          <div className="user-details">
            <div className="detail-row">
              <RiMailFill className="info-icon" />
              <p className="email">{user.email}</p>
            </div>
            <div className="detail-row">
              <p className="userid">
                <span>User ID:</span> {user.userid}
              </p>
            </div>
          </div>
          {/* <p>Movie Preferences: {user.preferences}</p> */}
          {/* <h3>Movie Recommendation:</h3> */}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
