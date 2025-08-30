import React from 'react';
import NewsSlider from '../NewsSlider/NewsSlider';
import Events from '../Events/Events';
import Workshop from '../Workshop/Workshop';

const EventPage = () => {
    return (
        <div>
            <NewsSlider></NewsSlider>
            <Events></Events>
            <Workshop></Workshop>
        </div>
    );
};

export default EventPage;