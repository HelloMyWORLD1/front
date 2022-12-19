import React, { useEffect, useCallback, useRef } from "react";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getBlogAll } from "../slices/blog/blogSlice";
import { searchBlog } from "../slices/blog/blogSlice";
import search from "../img/Search.png";
import registerImg from "../img/register.png";
import arrowLeft from "../img/arrowLeft.png";
import arrowRight from "../img/arrowRight.png";
import { v4 as uuidv4, v4 } from "uuid";
import {
  GetBlogAllTableLine,
  GetBlogAllTable,
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
  const { blogs } = useSelector((state: RootState) => state.blog);
  const navigate = useNavigate();
  const userNickname = document.location.href.split("/:")[1];
  console.log(document.location.href);
  console.log(userNickname);

  const dispatch = useAppDispatch();
  const [posts, setPosts] = React.useState<Posts[]>([]);
  const [getBlogsData, setGetBlogsData] = React.useState<getBlogAllType>({
    nickname: userNickname,
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
    getBlogsData.pageNum = getBlogsData.pageNum + 1;
    console.log(getBlogsData.pageNum);
    console.log(blogs.data.length / 5);

    if (getBlogsData.pageNum > blogs.data.length / 5) {
      getBlogsData.pageNum = getBlogsData.pageNum - 1;
      alert("더이상 보여질 내용이 없습니다!");
    } else {
      console.log(getBlogsData);
      dispatch(getBlogAll(getBlogsData)).then((res) =>
        setPosts(res.payload.data.blogs)
      );
    }
  };
  const blogInput = useRef<HTMLTableRowElement>(null);
  const blogClick = (event: any) => {
    console.log(event.target.id);
    navigate(`/blog/get/:${userNickname}/:${Number(event.target.id)}`);
  };
  const USERINFO = localStorage.getItem("userInfo");

  const registerBlogClick = () => {
    console.log(userNickname);
    console.log(USERINFO);
    if (userNickname === USERINFO) {
      navigate("/makeBlog");
    } else {
      alert("본인 블로그에서만 글작성이 가능합니다!");
    }
  };
  const extractTextPattern = /(<([^>]+)>)/gi; //문자열 추출 위한 정규표현식;

  const postLists: JSX.Element[] = posts.map((post) => {
    return (
      <GetBlogAllTr ref={blogInput} key={v4()}>
        <td>
          <GetBlogAllBox onClick={blogClick} id={post.blogId.toString()}>
            <table>
              <tr id={post.blogId.toString()}>
                <GetBlogAllHeader id={post.blogId.toString()}>
                  <GetBlogAllTitle id={post.blogId.toString()}>
                    {post.title}
                  </GetBlogAllTitle>
                  <div></div>
                  <GetBlogAllCreated id={post.blogId.toString()}>
                    {" "}
                    {post.createdAt.slice(0, 10)}
                  </GetBlogAllCreated>
                </GetBlogAllHeader>
              </tr>
              <tr>
                <td colSpan={2}>
                  <GetBlogAllContent id={post.blogId.toString()}>
                    {post.content.replace(extractTextPattern, "")}
                  </GetBlogAllContent>
                </td>
              </tr>
            </table>
          </GetBlogAllBox>
        </td>
      </GetBlogAllTr>
    );
  });

  const [keywords, setKeywords] = React.useState<searchBlogType>({
    nickname: userNickname,
    keyword: "",
  });
  const searchBlogs = (event: React.FormEvent<HTMLInputElement>) => {
    // 변화한 값 받아서 setKeywords 호출
    setKeywords({
      nickname: userNickname,
      keyword: event.currentTarget.value,
    });
    console.log(event.currentTarget.value);
    console.log(keywords);
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(keywords);
      dispatch(searchBlog(keywords)).then((res) => setPosts(res.payload.data));
    },
    [dispatch, keywords]
  );

  return (
    <GetBlogAllTable>
      <GetBlogAllTr>
        <GetBlogAllHeader>
          <div>
            <form onSubmit={onSubmit}>
              <SearchBlogInput
                type="text"
                onChange={searchBlogs}
              ></SearchBlogInput>
              <SearchBlogImg src={search}></SearchBlogImg>
            </form>
          </div>
          <div>
            <PostBlogBtn onClick={registerBlogClick}>
              <PostBlogImg src={registerImg}></PostBlogImg>
              글쓰기
            </PostBlogBtn>
          </div>
        </GetBlogAllHeader>
      </GetBlogAllTr>

      <GetBlogAllTableLine></GetBlogAllTableLine>
      {postLists}

      <tbody>
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
      </tbody>
    </GetBlogAllTable>
  );
}
