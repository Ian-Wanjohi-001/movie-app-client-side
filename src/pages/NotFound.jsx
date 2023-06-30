import Footer from "../components/Appfooter";
import PageNotFound from '../assets/page-not-found.svg';

const  NotFound = () => {
    return (
      <div>
 
      <img src={PageNotFound}  style={{height:'60vh'}} alt="PageNotFound" />
        <Footer message="Use The Navigation To Navigate To Your Desired page"/>

      </div>
    )
  }
  
  export default NotFound;
  