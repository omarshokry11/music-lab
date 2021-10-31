import React from "react";
import {Image} from "react-bootstrap";

import "./Style/CategoryItem.scss";

export default function CategoryItem() {

    const items = [
        {id: 1, h2: "Category", category:
                [
                    {id: 1, name: "Resaurant food (37)"},
                    {id: 2, name: "Travel news (10)"},
                    {id: 3, name: "Modern technology (03)"},
                    {id: 4, name: "Product (11)"},
                    {id: 5, name: "Inspiration (21)"},
                ]
        },
        {id: 2, h2: "Recent Post", posts:
                [
                    {id: 1, img: "/img/post-1.webp", name: "From life was you fish...", span: "January 12, 2019"},
                    {id: 2, img: "/img/post-2.webp", name: "The Amazing Hubble", span: "02 Hours ago"},
                    {id: 3, img: "/img/post-3.webp", name: "Astronomy Or Astrology", span: "03 Hours ago"},
                    {id: 4, img: "/img/post-4.webp", name: "Asteroids telescope", span: "01 Hours ago"},
                ]
        },
        {id: 3, h2: "Tag Clouds", tags:
                [
                    {id: 1, span: "Project"},
                    {id: 2, span: "Love"},
                    {id: 3, span: "Technology"},
                    {id: 4, span: "Travel"},
                    {id: 5, span: "Restaurant"},
                    {id: 6, span: "Life Style"},
                    {id: 7, span: "Design"},
                    {id: 8, span: "Illustration"},
                ]
        },
        {id: 4, h2: "Instagram Feeds", images:
                [
                    {id: 1, img: "/img/post-5.webp"},
                    {id: 2, img: "/img/post-6.webp"},
                    {id: 3, img: "/img/post-7.webp"},
                    {id: 4, img: "/img/post-8.webp"},
                    {id: 5, img: "/img/post-9.webp"},
                    {id: 6, img: "/img/post-10.webp"},
                ]
        },
        {id: 5, h2: "Newsletter", buttons: [{id: 1, btn: "SUBSCRIBE"}]},
    ]

    return(
        <div className="main-category-item-container">
            <div className="search">
                <input type="text" placeholder="Search Keyword" />
                <button>Search</button>
            </div>
            {items.map((item) => <div className="items" key={item.id}>
                <h2>{item.h2}</h2>
                {item.category ? <ul>{item.category.map((cat) => <li key={cat.id}>{cat.name}</li>)}</ul> : null}
                {item.posts ? <div>{item.posts.map((post) => <div key={post.id} className="post-item">
                    <div className="post-img">
                        <Image src={post.img} />
                    </div>
                    <div className="post-details">
                        <h3>{post.name}</h3>
                        <span>{post.span}</span>
                    </div>
                </div>)}</div> : null}
                {item.tags ? <div>{item.tags.map((tag) => <span key={tag.id} className="tag-item">{tag.span}</span>)}</div> : null}
                {item.images ? <div>{item.images.map((img) => <Image className="img-item" src={img.img} key={img.id} />)}</div> : null}
                {item.buttons ? <div>{item.buttons.map((btn) => <div key={btn.id} className="form">
                    <input type="text" placeholder="Enter email" />
                    <button>{btn.btn}</button>
                </div>)}</div> : null}
            </div>)}
        </div>
    )
}