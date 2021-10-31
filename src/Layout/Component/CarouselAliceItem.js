import React from "react";
import {Image} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TitleComponent from "./Block/TitleComponent";

import "./Style/CarouselAliceItem.scss";

export default function CarouselAliceItem() {

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 3},
    };

    const items = [
        {id: 1, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-1.webp", userName: "Mary Christmas"},
        {id: 2, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-2.webp", userName: "Juan Annatoo"},
        {id: 3, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-3.webp", userName: "Holly Graham"},
        {id: 4, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-1.webp", userName: "Mary Christmas"},
        {id: 5, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-2.webp", userName: "Juan Annatoo"},
        {id: 6, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-3.webp", userName: "Holly Graham  "}
    ]

    return(
        <div className="main-carousel-alice-container">
            <div className="title text-center">
                <TitleComponent title="Customers are loving MusicLab" />
            </div>
            <div className="products-carousel-section container">
                <AliceCarousel
                    autoPlay
                    activeIndex={0}
                    infinite={true}
                    responsive={responsive}
                    autoPlayInterval={1000}
                    fadeOutAnimation={false}
                    dotsDisabled={true}
                    touchTrackingEnabled={true}
                    mouseTrackingEnabled={true}
                >
                    {items.map((item) => <div className="items" key={item.id}>
                        <div className={item.className}>
                            <div className="details">
                                <Image src={item.imgUser} className="user-img" />
                                <div className="user">
                                    <h3>{item.userName}</h3>
                                    <span>CEO at Creativelab</span>
                                </div>
                            </div>
                            <p>{item.p}</p>
                            <div className="icon">
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                                <i className="fas fa-star"> </i>
                            </div>
                        </div>
                    </div>)}
                </AliceCarousel>
            </div>
        </div>
    )
}