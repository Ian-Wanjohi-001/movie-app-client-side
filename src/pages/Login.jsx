import AppBar from "../components/Appbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Appfooter";
const  Login = () => {
    return (
      <div>
        <AppBar />
        <LoginForm />
        <Footer message='Welcome Back 😎'/>
      </div>
    )
  }
  
  export default Login;
  