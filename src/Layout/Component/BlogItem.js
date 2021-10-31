import React from "react";
import {Image} from "react-bootstrap";
import CategoryItem from "./Block/CategoryItem";

import "./Style/BlogItem.scss";

export default function BlogItem() {

    const blogItem = [
        {id: 1, img: "/img/blog-1.jpg", h1: "Google inks pact for new 35-storey office"},
        {id: 2, img: "/img/blog-2.jpg", h1: "Google inks pact for new 35-storey office"},
        {id: 3, img: "/img/blog-3.jpg", h1: "Google inks pact for new 35-storey office"},
        {id: 4, img: "/img/blog-4.jpg", h1: "Google inks pact for new 35-storey office"},
        {id: 5, img: "/img/blog-5.jpg", h1: "Google inks pact for new 35-storey office"},
    ]

    return(
        <div className="main-blog-item-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12" >
                        {blogItem.map((item) => <div className="blog-item" key={item.id}>
                            <div className="history">
                                <h3>15</h3>
                                <p>Jan</p>
                            </div>
                            <div className="item-cover">
                                <Image src={item.img} />
                            </div>
                            <div className="item-details">
                                <h1>{item.h1}</h1>
                                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <span className="span-1"><i className="fas fa-user"> </i> Travel, Lifestyle</span>
                                <span className="span-2"><i className="fas fa-comment"> </i> 03 Comments</span>
                            </div>
                        </div>)}
                    </div>
                    <div className="col-lg-4 col-12">
                        <CategoryItem />
                    </div>
                </div>
            </div>
        </div>
    )
}