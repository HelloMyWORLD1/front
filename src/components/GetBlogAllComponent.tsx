import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getBlogAll } from "../slices/blogSlice";
import search from "../img/Search.png";
import registerImg from "../img/register.png";
import arrowLeft from "../img/arrowLeft.png";
import arrowRight from "../img/arrowRight.png";
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
  GetBlogAllBox,
  GetBlogNextImg,
} from "./styled";
interface Posts {
  blogId: number;
  title: string;
  content: string;
  createdAt: string;
  blogUserImg: string;
}

export default function GetBlogAllComponent() {
  const { blogs, inquireBlogDone } = useSelector(
    (state: RootState) => state.blog
  );

  const dispatch = useAppDispatch();
  const [posts, setPosts] = React.useState<Posts[]>([]);
  const [getBlogsData, setGetBlogsData] = React.useState<getBlogAllType>({
    nickname: "Jaewon",
    pageNum: 0,
  });

    useEffect(() => {
        dispatch(getBlogAll(getBlogsData)).then(
            (res) => (setPosts(res.payload.data.blogs))
        ) 
      }, []);
  

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
                  <GetBlogAllContent>{post.content}</GetBlogAllContent>
                </td>
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
              글쓰기
            </PostBlogBtn>
          </div>
        </GetBlogAllHeader>
      </GetBlogAllTr>

      <GetBlogAllTableLine></GetBlogAllTableLine>
      {postLists}
      <tr>
        <td>
          <GetBlogMoreBtn>
            <GetBlogNextImg src={arrowLeft}></GetBlogNextImg>
          </GetBlogMoreBtn>
          <GetBlogMoreBtn>1</GetBlogMoreBtn>
          <GetBlogMoreBtn>
            <GetBlogNextImg src={arrowRight}></GetBlogNextImg>
          </GetBlogMoreBtn>
        </td>
      </tr>
    </GetBlogAllTable>
  );
}
