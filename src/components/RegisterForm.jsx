import './registerform.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RiUserFill, RiMailFill, RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const { confirmPassword, ...requestData } = data; // Exclude confirmPassword from the request data
    console.log(requestData);
    axios
      .post('https://moviereccomendationapi.azurewebsites.net/auth/register', requestData)
      .then((response) => {
        response.data.message && toast.success(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  return (
    <>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <RiUserFill />
            <input type="text" {...register('username')} placeholder="Username" />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>
          <div className="form-field">
            <RiMailFill />
            <input type="text" {...register('email')} placeholder="Email" />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-field">
            <RiLockPasswordFill />
            <input type="password" {...register('password')} placeholder="Password" />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <div className="form-field">
            <RiLockPasswordFill />
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="redirect-message">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
