import React from 'react';
import './Main.css';
import SwiperCompenent from '../../Compenent/SwiperCompenent'; 
const Main = () => {
    return (
        <div>
    <SwiperCompenent Title={"Blockbuster Movies"} Category={"top_rated"}/>
    <SwiperCompenent Title={"only on netflix"} Category={"popular"}/>
    <SwiperCompenent Title={"Upcoming"} Category={"upcoming"}/>
    <SwiperCompenent Title={"Top Pice for You"} Category={"now_playing"}/>

        </div>
    );
}

export default Main;
