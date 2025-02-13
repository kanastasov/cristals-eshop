import React, {FC, ReactElement, useEffect} from "react";

import CarouselImageSlider from "./CarouselImageSlider/CarouselImageSlider";
import SliderBrands from "./SliderBrands/SliderBrands";
import HomePageTheme from "./HomePageTheme/HomePageTheme";
import PerfumeCardsSlider from "./PerfumeCardsSlider/PerfumeCardsSlider";

const Home: FC = (): ReactElement => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <SliderBrands />
            <HomePageTheme />
            <PerfumeCardsSlider />
                        <CarouselImageSlider />

        </div>
    );
};

export default Home;
