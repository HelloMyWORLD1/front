import React, { useState } from "react";
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

interface Post {
  title: string;
  content: string;
  createdAt: string;
  blogUser: string;
  blogUserImg: string;
}

export default function GetBlogComponenet() {
  const [post, setPost] = React.useState<Post>({
    title: "게시글 제목입니다.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  n an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  n an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  n an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  n an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    createdAt: "2020.10.08",
    blogUser: "Jaewon",
    blogUserImg: testImg,
  });

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
