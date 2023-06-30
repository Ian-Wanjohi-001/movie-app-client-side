import LoadingImage from '../assets/loading2.svg';
import './loadingdata.css';
const LoadingData = ({loadingThing}) => {
  return (
    <div className='Loading-container'>
        <h1 className="loading-title">{loadingThing}</h1>
      <img src={LoadingImage} className='loading-img' alt="Loading data" />
    </div>
  )
}

export default LoadingData;
