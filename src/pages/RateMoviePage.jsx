import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaStar, FaFilm, FaUser, FaComment, FaEnvelope } from 'react-icons/fa';
import AppBar from '../components/Appbar';
import './reviewform.css';
import { Context } from '../context/userContext/context';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';




const schema = yup.object().shape({
  movie_id: yup.number().required('Movie ID is required'),
  user_id: yup.number().required('User ID is required'),
  user_name: yup.string().required('User Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  review_content: yup.string().required('Review content is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating cannot exceed 5'),
});

const ReviewForm = () => {
  const { user } = useContext(Context);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      setValue('user_id', user.userid);
      setValue('user_name', user.username);
      setValue('email', user.email);
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    const submitData = {
movie_id: data.movie_id,
user_id: data.user_id,
review_content:data.review_content,
rating: data.rating
    }

    console.log(data);
    console.log(submitData )
    // Perform form submission logic 
    axios.post("https://moviereccomendationapi.azurewebsites.net/review", submitData )
    .then((response) => {
      response.data.message && toast.success(response.data.message, {
        position: toast.POSITION.TOP_CENTER
      })
      console.log(response.data.message)
    })
    .catch((error) => {
      toast.error(error.response.data.error, {
        position: toast.POSITION.TOP_CENTER
      });
      console.log(error)
    })

  };

  return (
    <>
      <AppBar />
      <form className="login-form review-form" onSubmit={handleSubmit(onSubmit)}>
  <div className="form-field">
    <label className="field-label">
      <FaFilm className="field-icon" />
    </label>
    <input
      type="text"
      id="movie_id"
      placeholder="Movie ID"
      {...register('movie_id')}
      className="text-input"
    />
    {errors.movie_id && <p className="error-message">{errors.movie_id.message}</p>}
  </div>

  <div className="wrap">
    <div className="form-field user-id">
      <label className="field-label">
        <FaUser className="field-icon" />
      </label>
      <input
        type="text"
        id="user_id"
        placeholder="User ID"
        disabled
        {...register('user_id')}
        className="text-input"
      />
      {errors.user_id && <p className="error-message">{errors.user_id.message}</p>}
    </div>

    <div className="form-field user-name">
      <label className="field-label">
        <FaUser className="field-icon" />
      </label>
      <input
        type="text"
        id="user_name"
        placeholder="User Name"
        {...register('user_name')}
        className="text-input"
      />
      {errors.user_name && <p className="error-message">{errors.user_name.message}</p>}
    </div>
  </div>

  <div className="wrap">
    <div className="form-field email">
      <label className="field-label">
        <FaEnvelope className="field-icon" />
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        {...register('email')}
        className="text-input"
      />
      {errors.email && <p className="error-message">{errors.email.message}</p>}
    </div>

    <div className="form-field rating">
      <label className="field-label">
        <FaStar className="field-icon" />
      </label>
      <input
        type="number"
        id="rating"
        placeholder="Rating"
        {...register('rating')}
        className="number-input"
      />
      {errors.rating && <p className="error-message">{errors.rating.message}</p>}
    </div>
  </div>

  <div className="form-field">
    <label className="field-label">
      <FaComment className="field-icon" />
    </label>
    <textarea
      id="review_content"
      placeholder="Review Content"
      {...register('review_content')}
      className="text-area"
    />
    {errors.review_content && <p className="error-message">{errors.review_content.message}</p>}
  </div>
  <button type="submit" className="submit-button">Submit</button>
</form>
<ToastContainer />
<button className="view-reviews-button">
  <Link to="/yourReviewsPage">View Your Reviews</Link>
</button>
    </>
  );
};

export default ReviewForm;