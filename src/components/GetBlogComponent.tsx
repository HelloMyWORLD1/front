import React, { useEffect, useState } from "react";
import testImg from "../img/testImg.png";
import {
  GetBlogAllTable,
  GetBlogAllTr,
  GetBlogUserBox,
  GetBlogUser,
  GetBlogUserImg,
  GetBlogCreated,
  GetBlogTitle,
  GetBlogContent,
  GetBlogBtn,
  GetBlogBtnTd,
} from "./styled";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getBlog } from "../slices/blogSlice";

interface Post {
  blogId: number;
  title: string;
  content: string;
  createdAt: string;
  blogUser: string;
  blogUserImg: string;
}

export default function GetBlogComponenet() {
  const { blog } = useSelector((state: RootState) => state.blog);
  const dispatch = useAppDispatch();
  const [blogId, setBlogId] = React.useState<getBlogDetailType>({
    blogId: 150,
  });
  const [post, setPost] = React.useState<Post>({
    blogId: 1,
    title: "test",
    content: "test",
    createdAt: "test",
    blogUser: "test",
    blogUserImg: "test",
  });

  useEffect(() => {
    dispatch(getBlog(blogId)).then((res)=>(setPost(res.payload.data)));
  }, []);

  return (
    <div>
      <GetBlogAllTable>
        <GetBlogAllTr>
          <td>
            <GetBlogUserBox>
              <GetBlogUserImg src={post.blogUserImg}></GetBlogUserImg>
              <GetBlogUser>{post.blogUser}</GetBlogUser>
              <GetBlogCreated>{post.createdAt}</GetBlogCreated>
            </GetBlogUserBox>
          </td>
        </GetBlogAllTr>
        <GetBlogAllTr>
          <td>
            <GetBlogTitle>{post.title}</GetBlogTitle>
          </td>
        </GetBlogAllTr>
        <GetBlogAllTr>
          <td>
            <GetBlogContent>{post.content}</GetBlogContent>
          </td>
        </GetBlogAllTr>
        <GetBlogAllTr>
          <GetBlogBtnTd>
            <GetBlogBtn>수정하기</GetBlogBtn>
            <GetBlogBtn>삭제하기</GetBlogBtn>
          </GetBlogBtnTd>
        </GetBlogAllTr>
      </GetBlogAllTable>
    </div>
  );
}
