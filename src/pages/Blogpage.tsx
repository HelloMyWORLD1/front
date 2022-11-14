import React from "react";
import GetBlogAllComponent from "../components/GetBlogAllComponent";
import BlogHeader from "../subComponents/BlogHeader";

export default function BlogPage(){
    return(
        <div>
            <BlogHeader/>
            <GetBlogAllComponent/>
        </div>
    )
    
}