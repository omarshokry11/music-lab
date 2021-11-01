import React from "react";
import {Image} from "react-bootstrap";

import "./Style/FeaturesItem.scss";

export default function FeaturesItem() {

    const featuresItems = [
        {id: 1, className: "main-features-item-container item-1", class: "features-items", img: "/img/item-1.webp", logo: "/img/features-item.webp", h1: "Listen to a persona lized mix of tracks", images: [
                {id: 1, img: "/img/number1.svg", span: "Reduce unnecessary spend with real time insights into every penny spent."},
                {id: 2, img: "/img/number2.svg", span: "Reduce unnecessary spend with real time insights into every penny spent."},
                {id: 3, img: "/img/number3.svg", span: "Reduce unnecessary spend with real time insights into every penny spent."},
            ]},
        {id: 2, className: "main-features-item-container item-2", class: "features-items", img: "/img/item-2.webp", h1: "We are tender heart charity foundation.", images: [
                {id: 1, img: "/img/finder.svg", span: "Reduce unnecessary spend with real time insights into every penny spent."},
                {id: 2, img: "/img/finder.svg", span: "Reduce unnecessary spend with real time insights into every penny spent."},
                {id: 3, img: "/img/finder.svg", span: "Reduce unnecessary spend with real time insights into every penny spent."},
            ]},
    ]

    return(
        <>
            {featuresItems.map((item) => <div className={item.className} key={item.id}>
                <div className={item.class}>
                    <div className="features-img">
                        <Image className="cover-img" src={item.img} />
                    </div>
                    <div className="features-details">
                        <Image src={item.logo} className="logo" />
                        <h1>{item.h1}</h1>
                        <ul>
                            {item.images.map((img) => <li key={img.id}>
                                <Image src={img.img} />
                                <span>{img.span}</span>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>)}
        </>
    )
}