import React from "react";
import CoverPages from "../Component/CoverPages";
import BlogItem from "../Component/BlogItem";

export default function BlogPage() {
    return(
        <div className="main-home-page-container">
            <CoverPages title="Blog" />
            <BlogItem />
        </div>
    )
}