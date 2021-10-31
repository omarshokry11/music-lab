import React from "react";
import CoverPages from "../Component/CoverPages";
import PricingItem from "../Component/PricingItem";
import OnlineMusic from "../Component/OnlineMusic";

export default function DownloadPage() {
    return(
        <div className="main-home-page-container">
            <CoverPages title="Download" />
            <PricingItem />
            <OnlineMusic />
        </div>
    )
}