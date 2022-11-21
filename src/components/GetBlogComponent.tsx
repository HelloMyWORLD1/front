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
import { getBlog, deleteBlog } from "../slices/blogSlice";
import { useNavigate } from "react-router-dom";

interface Post {
  blogId: number;
  title: string;
  content: string;
  createdAt: string;
  blogUser: string;
  blogUserImg: string;
}

export default function GetBlogComponenet() {
  const { user } = useSelector((state: RootState) => state.user);
  const { blog } = useSelector((state: RootState) => state.blog);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const blogIdNum = Number(document.location.href.split("/:")[1]);
  console.log(document.location.href.split("/")[4]);
  console.log(blogIdNum);
  const [blogId, setBlogId] = React.useState<getBlogDetailType>({
    blogId: blogIdNum,
  });
  const [post, setPost] = React.useState<Post>({
    blogId: 1,
    title: "test",
    content: "test",
    createdAt: "test",
    blogUser: "test",
    blogUserImg: "test",
  });

  const deleteBlogClick = () => {
    console.log(post.blogUser);
    console.log(user.nickname);
    if (post.blogUser === user.nickname) {
      dispatch(deleteBlog(blogId)).then(() => navigate(-1));
    } else {
      alert("본인 블로그에서만 삭제가 가능합니다.");
    }
  };
  const updateBlogClick = ()=>{
    console.log(post.blogUser);
    console.log(user.nickname);
    if (post.blogUser === user.nickname) {
      navigate("/updateBlog")
    } else {
      alert("본인 블로그에서만 수정이 가능합니다.");
    }
  }

  useEffect(() => {
    dispatch(getBlog(blogId)).then((res) => setPost(res.payload.data));
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
            <GetBlogBtn onClick={updateBlogClick}>수정하기</GetBlogBtn>
            <GetBlogBtn onClick={deleteBlogClick}>삭제하기</GetBlogBtn>
          </GetBlogBtnTd>
        </GetBlogAllTr>
      </GetBlogAllTable>
    </div>
  );
}
