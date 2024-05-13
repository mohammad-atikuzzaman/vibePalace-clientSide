import DisplayMap from "../Components/DisplayMap";
import FeatureRoom from "../Components/FeatureRoom";
import Newsletter from "../Components/Newsletter";
import Slider from "../Components/Slider";
import UserReviews from "../Components/UserReviews";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <DisplayMap></DisplayMap>
      <Newsletter></Newsletter>
      <FeatureRoom></FeatureRoom>
      <UserReviews></UserReviews>
    </div>
  );
};

export default Home;
