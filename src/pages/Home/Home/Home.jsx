import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Activity from '../Activity/Activity';
import Slider from '../Slider/Slider';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import Stats from '../Stats/Stats';
import Sponsored from '../Sponsored/Sponsored';
import MarqueeSection from '../MarqueeSection/MarqueeSection';

const Home = () => {
    return (
        <div>
            <MarqueeSection></MarqueeSection>
            <Hero></Hero>
            <About></About>
            <Activity></Activity>
            <Slider></Slider>
            <Stats></Stats>
            <NoticeBoard></NoticeBoard>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Home;