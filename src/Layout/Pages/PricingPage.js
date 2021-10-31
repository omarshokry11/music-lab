import React from "react";
import CoverPages from "../Component/CoverPages";
import PricingItem from "../Component/PricingItem";
import OnlineMusic from "../Component/OnlineMusic";

export default function PricingPage() {
    return(
        <div className="main-home-page-container">
            <CoverPages title="Pricing" />
            <PricingItem />
            <OnlineMusic />
        </div>
    )
}