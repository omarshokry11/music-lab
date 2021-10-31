import React from "react";
import CoverHomePage from "../Component/CoverHomePage";
import FeaturesItem from "../Component/FeaturesItem";
import OnlineMusic from "../Component/OnlineMusic";
import PricingItem from "../Component/PricingItem";
import CarouselAliceItem from "../Component/CarouselAliceItem";

export default function HomePage() {
    return(
        <div className="main-home-page-container">
            <CoverHomePage />
            <FeaturesItem />
            <OnlineMusic />
            <PricingItem />
            <CarouselAliceItem />
        </div>
    )
}