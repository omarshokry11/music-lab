import React from "react";
import TitleComponent from "./Block/TitleComponent";

import "./Style/PricingItem.scss";

export default function PricingItem() {

    const pricingItem = [
        {id: 1, span: "MusicBox Free", h4: "$ 0.00 month", details: [
                {id: 1, icon: "fas fa-check", span: "Online listening"},
                {id: 2, icon: "fas fa-check", span: "Regular audio"},
                {id: 3, icon: "fas fa-check", span: "With advertising"},
                {id: 4, icon: "fas fa-check", span: "30 skips per day"},
            ]},
        {id: 2, span: "MusicBox Free", h4: "$ 0.00 month", details: [
                {id: 1, icon: "fas fa-check", span: "Online listening"},
                {id: 2, icon: "fas fa-check", span: "Regular audio"},
                {id: 3, icon: "fas fa-check", span: "With advertising"},
                {id: 4, icon: "fas fa-check", span: "30 skips per day"},
            ]},
    ]

    return(
        <div className="main-pricing-item-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <TitleComponent
                            title="Listen free or subscribe toMusicLab Premium."
                            details="Utrust is a seamless integration that gives e-commerce businesses the power to accept digital currencies - and get all the benefits you can’t with just traditional payment methods."
                        />
                    </div>
                    {pricingItem.map((item) => <div className="col-lg-6 col-12" key={item.id}>
                        <div className="pricing-item">
                            <div className="pricing-title">
                                <span>{item.span}</span>
                                <h4>{item.h4}</h4>
                            </div>
                            <ul className="pricing-details">
                                {item.details.map((det) => <li key={det.id}>
                                    <i className={det.icon}> </i>
                                    <span>{det.span}</span>
                                </li>)}
                            </ul>
                            <button>GET FREE</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}