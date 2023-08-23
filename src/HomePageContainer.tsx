//import Item from './components/Item';
import "./itemcard.css";
// import { Box } from '@mui/material';
// import backGroundImage from '../src/assets/background2.png'
import HeadContainer from './components/HomePageContainers/HeadContainer';
import BodyDataContainer from './components/HomePageContainers/BodyDataContainer';
import BodyDataContainer2 from './components/HomePageContainers/bodyDataContainer2';



const HomePageContainer = () => {
    return (
        <>
            <HeadContainer />
            <BodyDataContainer2 />
            <BodyDataContainer />
        </>
    )

}
export default HomePageContainer;