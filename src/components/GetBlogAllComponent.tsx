import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getBlogAll } from "../slices/blogSlice";

export default function GetBlogAllComponent(){
    const {blogs} = useSelector(
        (state:RootState) => state.blog
    );

    const dispatch = useAppDispatch()

    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        dispatch(
            getBlogAll({
                nickname : "Jaewon",
                pageNum : 0
            })
        )
        console.log(blogs);
    },[blogs])
    return(
        <div>블로그 게시글들 조회
        </div>
    )
}