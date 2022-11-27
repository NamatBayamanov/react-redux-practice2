import classes from "./Photos.module.scss";
import {fetchPhotos} from '../../redux/slices/photos/photosSlice';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Animations from "../Animations/Animations";
import ForPhotos from "../Animations/ForPhotos/ForPhotos";
function Photos() {

  const dispatch = useDispatch();
  const {status, error, photos} = useSelector(store => store.photos);

  // asyn requests starting is here
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  
  
  return ( 
    <div className={classes.Photos}>
      {photos.map(el => {
        return (
          <li key={el.id}>
            <img src={el.url} alt="#" />
          </li>
        );
      })}
      {/* {status === 'pending...' && <h2>Wait for please Pending...</h2>} */}
      {status === 'pending...' && <ForPhotos/>}
      {error && <h2>An error has occurred: {error}</h2>}
    </div>
  );
}

export default Photos;