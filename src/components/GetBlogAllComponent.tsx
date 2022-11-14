import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getBlogAll } from "../slices/blogSlice";
import search from "../img/Search.png";
import registerImg from "../img/register.png"
import {
  GetBlogAllTableLine,
  GetBlogAllTable,
  HeaderComponent,
  GetBlogAllTr,
  GetBlogAllHeader,
  GetBlogMoreBtn,
  PostBlogBtn,
  SearchBlogInput,
  PostBlogImg,
  SearchBlogImg,
  GetBlogAllTitle,
  GetBlogAllCreated,
  GetBlogAllContent,
  GetBlogAllBox
} from "./styled";
interface Posts {
  title: string;
  content: string;
  createdAt: string;
}

export default function GetBlogAllComponent() {
  const { blogs } = useSelector((state: RootState) => state.blog);

  const dispatch = useAppDispatch();
  const [posts, setPosts] = React.useState<Posts[]>([
    {
      title: "블로그 글 제목",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard my text ever since the 1500s, hen an unknown printer took a galley of type and scrambled it to make a type pecimen book. n an unknown printer took a galley of type and scrambled",
      createdAt: "2022.11.10",
    },
    {
      title: "블로그 글 제목",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard my text ever since the 1500s, hen an unknown printer took a galley of type and scrambled it to make a type pecimen book.  n an unknown printer took a galley of type and scrambled it to ake a type specimen book. crambled it to make ad.o make o make ambled it to make a type pecimen book. ake ambled it to make a type pecimen book. ddd",
      createdAt: "2022.11.10",
    },
    {
      title: "블로그 글 제목",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard my text ever since the 1500s, hen an unknown printer took a galley of type and scrambled it to make a type pecimen book.  n an unknown printer took a galley of type and scrambled it to ake a type specimen book. crambled it to make ad.o make o make ambled it to make a type pecimen book. ake ambled it to make a type pecimen book. ddd",
      createdAt: "2022.11.10",
    },
    {
      title: "블로그 글 제목",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard my text ever since the 1500s, hen an unknown printer took a galley of type and scrambled it to make a type pecimen book.  n an unknown printer took a galley of type and scrambled it to ake a type specimen book. crambled it to make ad.o make o make ambled it to make a type pecimen book. ake ambled it to make a type pecimen book. ddd",
      createdAt: "2022.11.10",
    },
    {
      title: "블로그 글 제목",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard my text ever since the 1500s, hen an unknown printer took a galley of type and scrambled it to make a type pecimen book.  n an unknown printer took a galley of type and scrambled it to ake a type specimen book. crambled it to make ad.o make o make ambled it to make a type pecimen book. ake ambled it to make a type pecimen book. ddd",
      createdAt: "2022.11.10",
    },
  ]);

  const postLists: JSX.Element[] = posts.map((post) => {
    return (
      <GetBlogAllTr>
        <td>
          <GetBlogAllBox>
            <table>
              <tr>
                <GetBlogAllHeader>
                  <GetBlogAllTitle>{post.title}</GetBlogAllTitle>
                  <div></div>
                  <GetBlogAllCreated> {post.createdAt}</GetBlogAllCreated>
                </GetBlogAllHeader>
              </tr>
              <tr>
                <td colSpan={2}>
                    <GetBlogAllContent>{post.content}</GetBlogAllContent></td>
              </tr>
            </table>
          </GetBlogAllBox>
        </td>
      </GetBlogAllTr>
    );
  });

  return (
    <GetBlogAllTable>
      <GetBlogAllTr>
        <GetBlogAllHeader>
          <div>
            <SearchBlogInput type="text"></SearchBlogInput>
            <SearchBlogImg src={search}></SearchBlogImg>
          </div>
          <div></div>
          <div>
            <PostBlogBtn>
                <PostBlogImg src={registerImg}></PostBlogImg>
                글쓰기</PostBlogBtn>
          </div>
        </GetBlogAllHeader>
      </GetBlogAllTr>

      <GetBlogAllTableLine></GetBlogAllTableLine>
      {postLists}
      <tr>
        <td>
          <GetBlogMoreBtn>더보기</GetBlogMoreBtn>
        </td>
      </tr>
    </GetBlogAllTable>
  );
}
