import Teachers from "../Components/Teachers/Teachers";
import Banner from "../Header/Banner";
import About from "./About";
import HomeCollege from "./HomeCollege";
import PhotoGallery from "./PhotoGallery";
import Something from "./Something";

const Home = () => {
    return (
        <div>
            <Banner />
            <Something />
            <HomeCollege />
            
            <Teachers />
            <PhotoGallery />
            <About />
          
        </div>
    );
};

export default Home;