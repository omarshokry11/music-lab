import React from "react";
import CoverPages from "../Component/CoverPages";
import FeaturesItem from "../Component/FeaturesItem";
import OnlineMusic from "../Component/OnlineMusic";

export default function FeaturesPage() {
    return(
        <div className="main-home-page-container">
            <CoverPages title="Features" />
            <FeaturesItem />
            <OnlineMusic />
        </div>
    )
}