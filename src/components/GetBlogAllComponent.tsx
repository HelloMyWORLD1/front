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
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [posts, setPosts] = React.useState<Posts[]>([]);
  const [getBlogsData, setGetBlogsData] = React.useState<getBlogAllType>({
    nickname: "Jaewon",
    pageNum: 0,
  });

  useEffect(() => {
    dispatch(getBlogAll(getBlogsData)).then((res) =>
      setPosts(res.payload.data.blogs)
    );
  }, []);
  const GetBlogMinus = () => {
    if (getBlogsData.pageNum === 0) {
      alert("더이상 뒤로 갈수 없습니다!");
    } else {
      getBlogsData.pageNum = getBlogsData.pageNum - 1;
      dispatch(getBlogAll(getBlogsData)).then((res) =>
        setPosts(res.payload.data.blogs)
      );
    }
    console.log(getBlogsData);
  };

  const GetBlogPlus = () => {
    console.log((blogs.data.length)%5);
    getBlogsData.pageNum = getBlogsData.pageNum + 1;
    if((getBlogsData.pageNum) >((blogs.data.length)%5)){
        getBlogsData.pageNum = getBlogsData.pageNum - 1;
        alert("더이상 보여질 내용이 없습니다!")
    }else{
    console.log(getBlogsData);
    dispatch(getBlogAll(getBlogsData)).then((res) =>
      setPosts(res.payload.data.blogs)
    );
    }
    
  };
//   const blogClick = () => {
//     console.log(post.postId)
//   }

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
          <GetBlogMoreBtn onClick={GetBlogMinus}>
            <GetBlogNextImg src={arrowLeft}></GetBlogNextImg>
          </GetBlogMoreBtn>
          <GetBlogMoreBtn>{getBlogsData.pageNum + 1}</GetBlogMoreBtn>
          <GetBlogMoreBtn onClick={GetBlogPlus}>
            <GetBlogNextImg src={arrowRight}></GetBlogNextImg>
          </GetBlogMoreBtn>
        </td>
      </tr>
    </GetBlogAllTable>
  );
}
