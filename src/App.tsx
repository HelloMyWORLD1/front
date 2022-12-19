import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import PortFolioPage from "./pages/PortFolioPage";
import SignUpProfilePage from "./pages/SignUpProfilePage";
import FindPwPage from "./pages/FindPwPage";
import MakePortFolioPage from "./pages/MakePortFolioPage";
import MakeBlogPage from "./pages/MakeBlogPage";
import MakePortFolioSecondPage from "./pages/MakePortFolioSecondPage";
import BlogPage from "./pages/Blogpage";
import BlogDetailpage from "./pages/BlogDetailPage";
import PortFolioPageSecond from "./pages/PortFolioPageSecond";
import UpadateBlogPage from "./pages/UpdateBlogPage";
import IntroducePage from "./pages/IntroducePage";
import EditMyPage from "./pages/EditMyPage";
import useInquireMyInfo from "./useHooks/useInquireMyInfo";
//Route 설정.

function App() {
  useInquireMyInfo();
  return (
    <div>
      <GlobalStyles />
      <Routes>
        {/* 홈페이지 */}
        <Route path="/" element={<HomePage />}></Route>
        {/* 소개페이지  */}
        <Route path="/introduce" element={<IntroducePage />}></Route>

        {/* 로그인, 회원가입 */}
        <Route path="/logIn" element={<LogInPage />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route path="/signUp/profile" element={<SignUpProfilePage />}></Route>
        <Route path="/findpassword" element={<FindPwPage />}></Route>

        {/* 개인정보수정 페이지 */}
        <Route path="/myPage" element={<EditMyPage />}></Route>

        {/* 포트폴리오 등록 첫번째 페이지  */}
        <Route path="/makePortfolio" element={<MakePortFolioPage />}></Route>
        <Route
          path="/makePortfolioSecond"
          element={<MakePortFolioSecondPage />}
        ></Route>
        {/* 포트폴리오 페이지 */}
        <Route
          path="/portfolio/get/:nickname"
          element={<PortFolioPage />}
        ></Route>
        <Route
          path="/portfolio/get/second/:nickname"
          element={<PortFolioPageSecond />}
        ></Route>
        {/* 블로그 등록 페이지 */}
        <Route path="/makeBlog" element={<MakeBlogPage />}></Route>
        {/* 블로그 페이지 */}
        <Route path="/blog/get/:nickname" element={<BlogPage />}></Route>
        {/* 상세 블로그 페이지  */}
        <Route
          path="blog/get/:nickname/:blogId"
          element={<BlogDetailpage />}
        ></Route>
        {/* 블로그 수정 페이지 */}
        <Route path="/updateBlog" element={<UpadateBlogPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
